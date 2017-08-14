pragma solidity ^0.4.13;

// Это интерфейс для тех контрактов, которым покупатель токена может выдать разрешение на трату его токенов
// У таких контрактов может быть метод, для уведомления их о том, что им дано право тратить токены
contract TokenRecipient {

    // Получить разрешение на трату чьих-то чужих токенов какого-то вида
    function receiveApproval(

    // Кто дал тебе такое разрешение, и с чьего счета ты сможешь теперь тратить токены
    address _from,

    // Сколько токенов ты можешь потратить
    uint256 _value,

    // Адрес контракта, обслуживающего данный вид токенов
    address _token,

    // Какие-то дополнительные данные, которые владелец счета с токенами приложил к своему разрешению 
    bytes _extraData
    );
}

contract Owned {

    address public owner;

    function Owned() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner {
        owner = newOwner;
    }
}

contract TokenContract is Owned {

    // Публичные переменные контракта.

    // Каждый сможет узнать их значения.

    uint256 public sellPrice;
    uint256 public buyPrice;

    // Версия интерфейса токена
    string public standard = 'Token 0.1';

    // Название токена
    string public name;

    // Символ токена
    string public symbol;

    // Сколько точек после запятой у самой маленькой допустимой дольки этого токена
    uint8 public decimals;

    // Сколько сейчас этого токена всего
    uint256 public totalSupply;

    // Функция для получения баланса
    mapping (address => uint256) public balanceOf;

    // Функция для получения подбалансов для друзей того счета, у которого есть баланс
    mapping (address => mapping (address => uint256)) public allowance;

    // Событие в логе о том,что произошел перевод средств: кто, кому, сколько
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Событие о том, что некто потратил какое-то количество токенов
    event Burn(address indexed from, uint256 value);

    // Функция создания контракта
    // Указывается не только количество токенов, но и отличительные характеристики токена
    // Вопрос. Мы этот контракт будем компилировать и деплоить какой-то транзакцией. 
    // Где мы будем указывать параметры для этой функции? Это при компиляции? Это при деплое? 
    // Как конкретно указывать эти значения?
    function TokenContract(
        uint256 initialSupply,
        string tokenName,
        uint8 decimalUnits,
        string tokenSymbol,
        uint256 _buyPrice,
        uint256 _sellPrice
    ) {
        owner = msg.sender;

        // Переводим изначальное количество токена на создателя
        balanceOf[this] = initialSupply;

        // Устанавливаем переменную с изначальным запасом
        totalSupply = initialSupply;

        name = tokenName;
        symbol = tokenSymbol;
        decimals = decimalUnits;

        buyPrice = _buyPrice;
        sellPrice = _sellPrice;
    }

    // Перевести свои токены на другой счет
    function transfer(address _to, uint256 _value) {

        // Если некто пытается перевести на пустой счет, то выбросить исключение
        require(_to > 0x0);

        // Проверить, есть ли у отправителя столько токенов
        require(balanceOf[msg.sender] >= _value);

        // Проверяем не переполнится ли счет-назначение, если мы переведем на него такую сумму
        // Прибавляем к балансу счета-назначения указанную сумму, и если она стала не больше, а меньше, 
        // то это значит, что произошло переполнение
        require(balanceOf[_to] + _value >= balanceOf[_to]);

        // Отнимаем сумму со счета отправителя
        balanceOf[msg.sender] -= _value;

        // Прибавляем сумму к счету получателя
        balanceOf[_to] += _value;

        // Записываем в лог событие, что произошло перечисление денег
        Transfer(msg.sender, _to, _value);
    }

    // Владелец счета добавляет разрешение другому счету тратить токены, в пределах какого-то максимума
    // Владелец как бы открывает внутри своего счета токенов, еще один счет токенов, для другого участника сети
    // По интерфейсу, этот метод должен возвращать флаг успешности
    // Наша реализация всегда возвращает true
    function approve(address _spender, uint256 _value) returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    // Владелец счета дает разрешение другому участнику сети на трату токенов с его счета
    // Причем, счет другого участника сети - это контракт, у которого есть метод, через который его можно уведомить, 
    // что теперь он может тратить
    function approveAndCall(address _spender, uint256 _value, bytes _extraData) returns (bool success) {

        // Удостовериться, что контракт другого участника сети поддерживает уведомления о праве тратить токены
        TokenRecipient spender = TokenRecipient(_spender);

        // Дать разрешение на трату токенов
        if (approve(_spender, _value)) {

            // Уведомить, что дано разрешение на трату токенов
            spender.receiveApproval(msg.sender, _value, this, _extraData);

            return true;
        }
    }

    // Некто, кому владелец некого счета дал разрешение тратить свои токены, 
    // хочет перевести эти токены на какой-то другой счет
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {

        // Проверяем, чтобы не переводили на нулевой счет
        require(_to > 0x0);

        // Проверяем, есть ли на счету столько денег
        require(balanceOf[_from] >= _value);

        // Проверяем, не лопнет ли счет получателя
        require(balanceOf[_to] + _value >= balanceOf[_to]);

        // Проверяем, можно ли инициатору данной функции тратить столько денег
        require(_value <= allowance[_from][msg.sender]);

        // Вычитаем токены со счета
        balanceOf[_from] -= _value;

        // Добавляем токены на счет получателя
        balanceOf[_to] += _value;

        // Вычитаем токены из токенов, которые инициатору разрешено тратить с этого счета
        allowance[_from][msg.sender] -= _value;

        // Записываем в лог, что произошла передача данных
        Transfer(_from, _to, _value);

        // Сообщаем, что все закончилось хорошо
        return true;
    }

    // Владелец счета хочет потратить свои средства
    function burn(uint256 _value) returns (bool success) {

        // Проверяем, есть ли у него столько токенов
        require(balanceOf[msg.sender] >= _value);

        // Вычитаем указанное количество токенов с его счета
        balanceOf[msg.sender] -= _value;

        // Уменьшаем общее количество токенов
        totalSupply -= _value;

        // Записываем в лог трату токенов
        Burn(msg.sender, _value);

        return true;
    }

    // Доверенное лица владельца хочет потратить токены владельца
    function burnFrom(address _from, uint256 _value) returns (bool success) {

        // Проверяем, есть ли у хозяина столько токенов
        require(balanceOf[_from] >= _value);

        // Проверяем, разрешено ли доверенному лицу столько тратить
        require(_value <= allowance[_from][msg.sender]);

        // Вычитаем со счета владельца
        balanceOf[_from] -= _value;

        // Уменьшаем общее количество токенов
        totalSupply -= _value;

        // Записываем в лога трату токенов
        Burn(_from, _value);

        // Возвращаем, что все прошло хорошо
        return true;
    }

    function mintToken(address target, uint256 mintedAmount) onlyOwner {

        // Добавить кому-то токенов
        balanceOf[target] += mintedAmount;

        // Добавить общее количество токенов
        totalSupply += mintedAmount;

        // Записать в лог, что произошел перевод денег из ниоткуда на владельца контракта
        Transfer(0, this, mintedAmount);

        // Записать в лог перемещение денег от владельца на того, на кого хочешь выпустить
        if (target != address(this)) {
            Transfer(this, target, mintedAmount);
        }
    }

    function setPrices(uint256 newSellPrice, uint256 newBuyPrice) onlyOwner {
        sellPrice = newSellPrice;
        buyPrice = newBuyPrice;
    }

    function() payable onlyOwner {
    }

    // Некто прислал нам эфиров, чтобы купить на них токены, по текущей цене
    function buyOnBehalfOf(address buyer) payable returns (uint amount) {
        
        require(buyer > 0x0);
    
        // К нам в транзакцию пришло какое-то количество эфиров
        // К этому количеству эфиров мы имеем доступ через такое свойство:
        //      msg.value
    
        // Выясняем, на сколько эфиров хватит того количества эфиров, которое нам прислали
        amount = msg.value / buyPrice;

        // Продавать мы будем токены, которые принадлежат самому контракту
        // Не владельцу контракта, а прямо самому контракту

        // Проверяем, что на контракте числится достаточно токенов для покупки
        require(amount <= balanceOf[this]);

        // Добавляем покупателю токенов
        balanceOf[buyer] += amount;

        // Вычитаем токены, принадлежащие самому контракту
        balanceOf[this] -= amount;

        // Записываем в лог событие перевода токенов
        Transfer(this, buyer, amount);

        // Возвращаем купленное количество токенов
        return amount;
    }

    // Некто просит забрать его токены и выслать ему эфиров, в соответствии с текущей ценой продажи
    function sell(uint amount) returns (uint revenue){

        // Проверяем, что у автора сообщения есть столько токенов, сколько он хочет продать  
        require(amount <= balanceOf[msg.sender]);

        // Добавляем эти токены на счет самого контракта
        balanceOf[this] += amount;

        // Вычитаем токены со счета автора сообщения
        balanceOf[msg.sender] -= amount;

        // Вычисляем количество эфиров, которые мы ему теперь должны
        revenue = amount * sellPrice;

        // sends ether to the seller: it's important
        require(msg.sender.send(revenue));

        // executes an event reflecting on the change
        Transfer(msg.sender, this, amount);

        // ends function and returns
        return revenue;
    }
}

contract Proxy {

    TokenContract public tokenContract;

    string public proxyName;

    function Proxy(
        TokenContract _tokenContract,
        string _proxyName
    ) {
        tokenContract = _tokenContract;
        proxyName = _proxyName;
    }

    function() payable {
        tokenContract.buyOnBehalfOf.value(msg.value)(msg.sender);
    }
}

contract Test {
}

#!/usr/bin/env bash

#--ast \
#--ast-json \
#--ast-compact-json \
#--asm \
#--asm-json \
#--opcodes \
#--bin \
#--bin-runtime \
#--clone-bin \
#--abi \
#--hashes \
#--userdoc \
#--devdoc \
#--metadata \
#--formal

solc \
-o build \
--overwrite \
--ast \
--ast-json \
--ast-compact-json \
--asm \
--asm-json \
--opcodes \
--bin \
--bin-runtime \
--clone-bin \
--abi \
--hashes \
--userdoc \
--devdoc \
--metadata \
--formal \
token-proxy-system.sol

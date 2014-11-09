#!/bin/bash
# morse.sh - generate morse code from ascii
# you can contact me at:
# --. .-. ..- .-.. --- ... .--.-. --. -- .- .. .-.. 
# .-.-.- -.-. --- --

# if you don't like my "dots" and "dashes"
# you can change them
# dot=.
# dash=_

# generate ascii (from space to ~)
for ((i=32; i<127; i++)); do
#ascii="$ascii$(echo -en $(printf "%s%o" "\\" "$i"))"
ascii=$1
done

# english chars that can be translated to morse
eng=".,?'!/():;=-\"\$@ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

# The morse code for each character in eng
mor=( # punctuation
·-·-·- --··-- ··--·· ·----· -·-·-- -··-· -·--·- -·--·-
---··· -·-·-· -···- -····- ·-··-·
···-··- ·--·-·
# alphabet A-Z
·- -··· -·-· -·· · ··-· --· ···· ·· ·--- -·- ·-·· -- -·
--- ·--· --·- ·-· ··· - ··- ···- ·-- -··- -·-- --··
# Numbers 0-9
----- ·---- ··--- ···-- ····-
····· -···· --··· ---·· ----· )

mor=( ${mor[@]//·/${dot:-·}} )
mor=( ${mor[@]//-/${dash:--}} )

while read -a line; do
for i in "${line[@]}"; do
for (( j=0; j<${#i}; j++ )); do

if  [ "${eng/${i:$j:1}/}" == "$eng" ]; then
pos=${ascii%%${i:$j:1}*}
eval char=\$\'\\$( printf "%o" "$(( ${#pos} ))" )\'
[ "${eng/$char/}" == "$eng" ] && continue
else
char="${i:$j:1}"
fi

pos="${eng%%$char*}"
printf "%s " "${mor[${#pos}]}"


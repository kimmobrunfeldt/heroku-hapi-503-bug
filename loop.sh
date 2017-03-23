#!/bin/bash
x=1
res="empty"
while [ $x -le 500 ]
do
  echo "Welcome $x times"
  echo "$resp"

  x=$(( $x + 1 ))
  resp=$(curl -d 'a' https://hapi-test-service-fldxoyfywv.now.sh)
done

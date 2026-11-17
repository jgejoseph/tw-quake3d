cd /workspace/tw-quake3d/data/raw
. /workspace/tw-quake3d/scripts/scripts_fetch.sh
curl -s -c cj.txt -b cj.txt -A "$UA" https://scweb.cwa.gov.tw/zh-tw/history -o /dev/null
for y in $(seq 1935 2026); do
  f=cwa/cwa_$y.csv
  [ -s $f ] && head -c 5 $f | grep -qv '<' && continue
  e="$y%2F12%2F31"; [ $y = 2026 ] && e="2026%2F11%2F10"
  for t in 1 2 3; do
    r=$(q "$y%2F01%2F01" "$e" $f)
    if head -c 6 $f | grep -q '<html'; then echo "$y try$t rejected"; sleep 10; else echo "$y $r rows=$(($(wc -l <$f)-1))"; break; fi
  done
  sleep 2
done
echo DONE

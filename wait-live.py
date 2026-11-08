import urllib.request,time,re
local=open('docs/index.html',encoding='utf-8').read()
expected=re.search(r'/assets/index-[^" ]+js',local).group()
for i in range(20):
 html=urllib.request.urlopen('https://raj-microsoft.github.io/obsidian-templates/?audit=final',timeout=20).read().decode()
 if expected in html:
  print('Latest assets live:',expected,flush=True)
  break
 print('Waiting for current deployment',flush=True)
 time.sleep(12)
else: raise SystemExit('Current build not live')

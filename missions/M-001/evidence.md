## Step 1: DNS

```
PS C:\Users\user> nslookup youtube.com
Serveur :   UnKnown
Address:  192.168.42.205

Réponse ne faisant pas autorité :
Nom :    youtube.com
Addresses:  2a00:1450:4006:820::200e
          64.233.166.93
          64.233.166.136
          64.233.166.91
          64.233.166.190

PS C:\Users\user>
```

```
PS C:\Users\user> nslookup exemple.com
Serveur :   UnKnown
Address:  192.168.42.205

Réponse ne faisant pas autorité :
Nom :    exemple.com
Addresses:  64:ff9b::67e0:b6f5
          103.224.182.245
```

```
PS C:\Users\user> nslookup example.com
Serveur :   UnKnown
Address:  192.168.42.205

Réponse ne faisant pas autorité :
Nom :    example.com
Addresses:  2606:4700:10::6814:179a
          2606:4700:10::ac42:93f3
          104.20.23.154
          172.66.147.243
```

## Step 2: Connection & TLS

```
C:\Users\user> curl.exe -v https://example.com -o NUL
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* Host example.com:443 was resolved.
* IPv6: (none)
* IPv4: 104.20.23.154, 172.66.147.243
*   Trying 104.20.23.154:443...
* schannel: disabled automatic use of client certificate
* ALPN: curl offers http/1.1
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* ALPN: server accepted http/1.1
* Connected to example.com (104.20.23.154) port 443
* using HTTP/1.x
> GET / HTTP/1.1
> Host: example.com
> User-Agent: curl/8.13.0
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Date: Tue, 06 Oct 2026 21:56:16 GMT
< Content-Type: text/html; charset=utf-8
< Transfer-Encoding: chunked
< Connection: keep-alive
< Server: cloudflare
< last-modified: Sun, 04 Oct 2026 20:44:03 GMT
< allow: GET, HEAD
< Accept-Ranges: bytes
< Age: 6260
< cf-cache-status: HIT
< CF-RAY: a467ea409ac651c8-MAD
< alt-svc: h3=":443"; ma=86400
<
{ [589 bytes data]
100   577    0   577    0     0    551      0 --:--:--  0:00:01 --:--:--   558
* Connection #0 to host example.com left intact
PS C:\Users\user>
```

## Step 3: HTTP in the browser

Screenshot: `step3-network-panel.png` (DevTools, Réseau tab, after Ctrl+Shift+R).
Transcribed by the mentor from that screenshot:

| Nom | État | Type | Initiateur | Taille | Durée |
|---|---|---|---|---|---|
| example.com | 200 | document | Autre | 0,5 ko | 263 ms |
| s.js | 200 | script | (index):1 | 1,6 ko | 110 ms |
| content.css | 200 | fetch | content.js:1 | 21,0 ko | 3 ms |
| floating-find-similar.css | 200 | fetch | floating-find-similar.js:1 | 23,0 ko | 4 ms |
| selection-toolbar.css | 200 | fetch | selection-toolbar.js:1 | 23,9 ko | 4 ms |
| data:font/woff2;bas… | 200 | font | (index) | 100 ko | 50 ms |
| data:image/svg+xml,… | 200 | svg+xml | Autre | 23,9 ko | 6 ms |

Footer: 7 requêtes · 194 ko transféré(s) · 195 ko ressources · Terminer : 785 ms · DOMContentLoaded : 460 ms · Chargement : 664 ms

function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".dns.adguard.com") ||
                  isInNet(host, "8.8.8.8", "2001:0db8:85a3:0000:0000:8a2e:0370:7334")
                    ) {
                        return "DIRECT";
                          }
                            return "https://dns.adguard.com:8080";
                            }

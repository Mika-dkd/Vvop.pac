function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".dns.adguard.com") ||
                  isInNet(host, "8.8.8.8", "0.0.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "https://dns.adguard.com:8080";
                            }

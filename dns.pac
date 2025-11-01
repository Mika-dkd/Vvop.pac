function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".dns.adguard.com") ||
                  isInNet(host, "8.8.8.8", "0.0.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "HTTP dns.adguard.com:433";
                            }

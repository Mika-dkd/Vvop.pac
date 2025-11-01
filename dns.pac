function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".dns.adguard.com") ||
                  isInNet(host, "8.8.8.8", "1.255.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "HTTPS dns.adguard.com:433";
                            }

function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".8.8.8.8.com") ||
                  isInNet(host, "8.8.8.8", "255.255.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "PROXY proxy.8.8.8.8.com:8080";
                            }

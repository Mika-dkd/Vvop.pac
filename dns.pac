function FindProxyForURL(url, host) {
      if (
          isPlainHostName(host) ||
              dnsDomainIs(host, ".192.168.4.101.com") ||
                  isInNet(host, "192.168.4.101", "255.255.0.0")
                    ) {
                        return "DIRECT";
                          }
                            return "PROXY proxy.192.168.4.101.com:8080";
                            }

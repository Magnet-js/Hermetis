# HOW IT SHOULD WORK

Proxmox integration 

https://pve.proxmox.com/pve-docs/api-viewer/index.html#/nodes

https://ip:8006/api2/json/nodes


response:

{
    "data": [
        {
            "maxdisk": 540848422912,
            "node": "node01",
            "status": "online",
            "type": "node",
            "level": "",
            "maxmem": 134209519616,
            "disk": 3086876672,
            "maxcpu": 24,
            "mem": 36334346240,
            "id": "node/node01",
            "uptime": 147484,
            "ssl_fingerprint": "...",
            "cpu": 0.00918576652100241
        }
    ]
}
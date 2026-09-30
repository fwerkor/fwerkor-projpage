# FWERKOR Projects

Source for [proj.fwerkor.com](https://proj.fwerkor.com/).

The site is a framework-free static project index with dedicated pages for the current FWERKOR projects:

1. Continuous Interaction Diffusion (CID)
2. ArgosFS
3. CapOS
4. CacheReforge

The legacy AgentBot site is retained as an infrastructure-side archive for historical reference and is not part of the active project index.

## Local preview

```bash
python3 -m http.server 8080
```

## Deployment

Production runs as a static Nginx service in the dedicated `projpage` Incus container. The Nginx configuration is in `deploy/nginx.conf`.

## License

Site source is released under the MIT License. Archived project materials keep their original status and are preserved as-is.

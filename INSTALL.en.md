# Download and install · ALPHA

[Português](INSTALL.md) · [Home](README.en.md) · [Manual](manual/README.en.md)

The `v0.2.0-alpha.1` packages are in preparation. These are the planned manual installation steps; final contents and verification results will be confirmed in the release notes.

## Before opening

Download your system's attachment from **Releases → Assets**, extract the whole package and read the alpha notice. GitHub's automatic “Source code” file is not an installer. Compare the download with `SHA256SUMS.txt` from the same release. Checksums identify file differences or corruption; they are not digital signatures or independent proof of authorship. Close your DAW before replacing plugins and back up projects before updating.

## Windows 10/11 · x64

You only need the format you intend to use.

| Format | Copy | Destination |
|---|---|---|
| VST3 | Entire `Usina.vst3` bundle, including its contents | `%LOCALAPPDATA%\Programs\Common\VST3` |
| CLAP | `Usina.clap` | `%LOCALAPPDATA%\Programs\Common\CLAP` |
| Standalone | Application and accompanying files required by the package | A folder of your choice |

Paste a destination into Explorer's address bar; create the folder if needed. An alternative system-wide VST3 location is `C:\Program Files\Common Files\VST3`, which may require administrator permission. Avoid multiple versions in folders scanned by the same host.

Open your DAW's plugin preferences; menu names vary by application. Check that it supports your chosen format and that the installation folder is included in its search paths. Add the folder if needed, then refresh the plugin scan or restart the DAW according to its instructions. Create an instrument track, find **Usina** in the plugin list and load your installed format. Set the MIDI input, arm the track and enable monitoring. Start with low volume.

In the Standalone, use **Options → Audio/MIDI Settings** to select audio output and MIDI input. Keep audio input muted when you only want to play notes.

### Windows warning

This alpha is unsigned. Windows **SmartScreen** may warn when opening the Standalone. Check the download origin and checksum first. If you choose to run it, the warning may offer **More info → Run anyway**. If that option is unavailable or your organization blocks the app, do not disable protection; contact your administrator or wait for an appropriate distribution.

## Linux · x64 · experimental

**Experimental, without warranty. VAPOR may sound different from the Windows edition.**

Extract the archive and copy the complete bundle or file to your account's format folder:

| Format | Destination |
|---|---|
| VST3 | `~/.vst3/` |
| CLAP | `~/.clap/` |
| LV2 | `~/.lv2/` |
| Standalone | A folder of your choice |

Keep bundle contents intact. The Standalone needs execute permission. Restart your host and refresh its plugin scan. The release will identify the tested distribution and required dependencies; compatibility with every distribution or host is not promised.

## Troubleshooting

- **Not listed:** check x64, format, scan path and complete bundle contents. Re-scan. Do not mix Debug and Release builds.
- **No sound:** check track arming, monitoring, MIDI input and audio output. Try INIT. A SAMPLE operator with no recording may be silent.
- **SEQ stopped:** in the plugin, enable SEQ and start your DAW transport. The Standalone has its own transport.
- **MISSING file:** restore or reload the recording/IR. Presets store paths, not embedded media.
- **Crackles or delay:** check driver, buffer and session load. Higher oversampling uses more CPU. Include settings in a report; no universal latency is guaranteed.
- **Busy MIDI port:** avoid opening the same controller port through both the DAW and CABINE's direct connection.

If needed, open an Issue with version, system, DAW, format and reproduction steps. Remove personal paths and private information; only share audio you have permission to distribute.

## Update or remove

Close the DAW, retain the previous version and replace the installed files. Preserve `.usina` presets, `.usinamap` maps, recordings and IRs. Alpha updates do not guarantee identical project sound. To uninstall a manual installation, remove only the installed bundles/application files with the applications closed; your sounds and sessions can remain.

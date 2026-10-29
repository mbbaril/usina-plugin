# Autoria, créditos e licenças / Credits and licences

**Rascunho editorial.** A lista e os avisos completos dos pacotes finais dependem da conferência de dependências do release. Esta página não substitui os cabeçalhos, textos de licença e avisos que acompanham as fontes e os binários.

Copyright © 2026 Mario Brandalise Baril. Publicação / Published by **Ruído**.

Usina: **Ruído**. O conjunto distribuído segue a **AGPL-3.0**; os arquivos GPL-3.0 e os componentes com outras licenças preservam seus próprios termos. Os textos GPL-3.0 e AGPL-3.0 devem acompanhar cada pacote. Não se reivindica autoria sobre código de terceiros.

| Trabalho utilizado | Autoria | Licença / origem |
|---|---|---|
| JUCE | Raw Material Software | AGPL-3.0 · [JUCE](https://github.com/juce-framework/JUCE) |
| RuidoCore | Ruído | AGPL-3.0 |
| Motor FM / firmware Usina | Ruído, sobre Felucca | GPL-3.0 |
| Felucca | Leo Kuroshita (Hügelton) | GPL-3.0 |
| sst-filters | Surge Synth Team | GPL-3.0 · [sst-filters](https://github.com/surge-synthesizer/sst-filters) |
| Tabelas de algoritmos de seis operadores, estilo msfa | Google / Raph Levien | Apache-2.0 · [music-synthesizer-for-android](https://github.com/google/music-synthesizer-for-android) |
| DSP de reverb, textura, granular, modelos de síntese e utilitários stmlib | Emilie Gillet | MIT · [eurorack](https://github.com/pichenettes/eurorack), [stmlib](https://github.com/pichenettes/stmlib) |
| Modos adicionais do processador granular | Matthias Puech | MIT · [parasites](https://github.com/mqtthiqs/parasites) |

Os portes adaptam o código às plataformas do Usina; os avisos originais continuam aplicáveis. A convolução IR usa JUCE; nenhuma resposta de impulso é distribuída com o plugin. Os bancos DX7 selecionados para Plaits não fazem parte da distribuição pública.

## Referências de ideias e modelos

As referências abaixo informam modelos e comportamento; não significam incorporação de seu código:

- Iannis Xenakis, *Formalized Music*: síntese estocástica dinâmica.
- SuperCollider: documentação de processos caóticos; Clifford Pickover e Boris Chirikov, entre as referências dos mapas.
- Fletcher e Rossing, *The Physics of Musical Instruments*; Perrin, Charnley e de Pont: modos e razões de estruturas ressonantes.
- Perry Cook e Gary Scavone, STK: referência de excitação por arco.
- Nuke.YKT, Nuked-OPL3: referência das formas de onda de chip.
- ITU-R BS.1770: pico verdadeiro e loudness; T. van Waterschoot e M. Moonen: critérios de controle de realimentação acústica.

Nomes de fabricantes e projetos são citados para atribuição e referência. Não há afiliação nem endosso implícito.

## Texto comunitário e tipografia da prévia

O [código de conduta](CODE_OF_CONDUCT.md) adapta Contributor Covenant 2.1, de Coraline Ada Ehmke e pessoas colaboradoras, sob CC BY 4.0, com alterações declaradas no próprio documento.

A prévia da landing inclui fontes locais sob SIL Open Font License: DM Sans (The DM Sans Project Authors), IBM Plex Mono (IBM Corp.) e Barlow Condensed (The Barlow Project Authors). Os avisos completos estão nos arquivos `OFL-*.txt` ao lado das fontes. Essa tipografia da página não deve ser confundida com uma lista de dependências do binário.

## Aviso MIT reproduzido dos portes

```text
Copyright 2012, 2014, 2015 Emilie Gillet.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

Outros anos, titulares e avisos dos arquivos adaptados permanecem nas fontes correspondentes e devem ser preservados nos pacotes.

Os pacotes binários incluem `THIRD_PARTY_NOTICES.txt`, com os textos de licença das dependências inventariadas, além dos demais avisos e licenças.

This software is based in part on the work of the Independent JPEG Group.

## English

**Editorial draft:** the final release's complete dependency notices still require verification. This page does not replace licence texts, original headers or notices shipped with source and binaries.

Usina is by Ruído. The combined distribution is AGPL-3.0; GPL-3.0 and other components retain their own terms. The table above names authors and projects. Modified ports retain upstream notices. No impulse responses or the selected Plaits DX7 patch banks are included in the public distribution. The references section credits ideas without claiming their code was copied. Third-party names imply neither affiliation nor endorsement.

The landing preview's locally hosted fonts are OFL-licensed and retain their complete notices. The conduct text has separate CC BY 4.0 attribution. Full corresponding source, licence texts and required notices must accompany the release.

Binary packages include `THIRD_PARTY_NOTICES.txt` with licence texts for inventoried dependencies, alongside other required notices and licences.

This software is based in part on the work of the Independent JPEG Group.

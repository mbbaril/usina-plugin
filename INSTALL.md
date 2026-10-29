# Baixar e instalar · ALFA

[English](INSTALL.en.md) · [Página inicial](README.md) · [Manual](manual/README.md)

Os pacotes de `v0.2.0-alpha.1` estão em preparação. Estas instruções descrevem a instalação manual prevista; a lista de arquivos e os resultados finais serão confirmados nas notas do release.

## Antes de abrir

1. Baixe o arquivo do seu sistema em **Releases → Assets**. Não baixe o arquivo automático “Source code” para instalar o plugin.
2. Extraia o pacote inteiro para uma pasta. Leia o aviso do alfa incluído.
3. Confira o nome e a soma do download com `SHA256SUMS.txt`, obtido no mesmo release. Uma soma detecta corrupção ou diferença de arquivo; não é assinatura digital nem prova independente de autoria.
4. Feche a DAW antes de copiar ou substituir plugins. Faça uma cópia dos projetos antes de atualizar.

## Windows 10/11 · x64

Escolha **um formato por instância**; não é preciso instalar todos.

| Formato | Copie | Destino |
|---|---|---|
| VST3 | A pasta inteira `Usina.vst3`, com seu conteúdo | `%LOCALAPPDATA%\Programs\Common\VST3` |
| CLAP | O arquivo `Usina.clap` | `%LOCALAPPDATA%\Programs\Common\CLAP` |
| Standalone | O aplicativo e os arquivos que o pacote indicar como necessários | Uma pasta à sua escolha |

Cole o destino na barra de endereços do Explorador. Crie a pasta se ela não existir. Para instalação VST3 para todas as contas, o caminho alternativo é `C:\Program Files\Common Files\VST3`, que pode exigir permissão de administração. Evite manter versões diferentes em pastas examinadas pela mesma DAW.

### Abrir na sua DAW

1. Abra as preferências de plugins da sua DAW. Os nomes dos menus variam entre programas.
2. Confira se ela aceita o formato escolhido e se a pasta de instalação está na busca. Acrescente-a se necessário.
3. Atualize a busca de plugins ou reinicie a DAW, conforme suas instruções.
4. Crie uma pista de instrumento, procure **Usina** na lista de plugins e carregue o formato escolhido.
5. Selecione a entrada MIDI, arme a pista e ligue a monitoração. Comece com o volume baixo e toque uma nota.

No Standalone, abra **Options → Audio/MIDI Settings** e escolha a saída e a entrada MIDI. Para apenas tocar, mantenha a entrada de áudio muda.

### Aviso do Windows

Este alfa não tem assinatura digital. O Windows pode mostrar o **SmartScreen**, sobretudo ao abrir o Standalone. Verifique a origem do download e a soma primeiro. Se decidir executar, o aviso pode oferecer **Mais informações → Executar assim mesmo**. Se essa opção não aparecer ou houver bloqueio da sua organização, não desative a proteção: peça orientação à administração ou aguarde uma distribuição adequada ao seu ambiente.

## Linux · x64 · experimental

**Experimental, sem garantia. O efeito VAPOR pode soar diferente da edição Windows.**

Extraia o pacote. Copie o bundle completo ou arquivo do formato escolhido:

| Formato | Destino da sua conta |
|---|---|
| VST3 | `~/.vst3/` |
| CLAP | `~/.clap/` |
| LV2 | `~/.lv2/` |
| Standalone | Pasta à sua escolha |

Mantenha o conteúdo interno dos bundles. No Standalone, o arquivo precisa ter permissão de execução. Reabra a DAW e atualize sua busca de plugins. A distribuição Linux e as dependências necessárias serão informadas no release; não há promessa de funcionamento em toda distribuição ou host.

## Se não aparecer ou não soar

- **Não aparece na DAW:** confirme x64, formato, pasta de busca e cópia integral do bundle. Faça nova busca. Não misture builds Debug e Release.
- **Abre, mas não toca:** confira pista armada, monitoração, entrada MIDI e saída. Experimente INIT. Um operador SAMPLE sem gravação pode ficar mudo.
- **SEQ parado:** no plugin, o andamento e o transporte vêm da DAW. Ative SEQ e inicie o transporte do host. O Standalone tem transporte próprio.
- **Arquivo MISSING:** restaure ou carregue novamente o áudio/IR. O preset guarda caminhos; não embute esses arquivos.
- **Estalos ou atraso:** confira driver, buffer e carga da sessão. Oversampling mais alto custa mais CPU. Anote os valores usados ao relatar o problema; não há latência universal garantida.
- **Porta MIDI ocupada:** evite que DAW e conexão direta da CABINE tentem abrir a mesma porta do controlador.

Se persistir, abra uma Issue com versão, sistema, DAW, formato e passos para repetir. Não publique caminhos com seu nome, conversas ou áudio de outras pessoas sem autorização.

## Atualizar e remover

Feche a DAW, guarde a versão anterior e substitua os arquivos no mesmo destino. Preserve seus `.usina`, `.usinamap`, gravações e IRs. Durante o alfa, abrir um projeto antigo não garante som idêntico.

Para remover a instalação manual, feche os aplicativos e apague somente os bundles/arquivos que você instalou. Não é necessário apagar seus sons ou sessões.

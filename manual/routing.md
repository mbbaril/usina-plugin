# AUX e LOOP INSERT · caminhos do áudio

[English](routing.en.md) · [Manual principal](README.md) · [Efeitos e módulos](modules.md#efeitos-escolher-pelo-gesto) · [Patches de modulação](modulation.md)

Esses caminhos respondem a perguntas diferentes. **AUX:** quanto deste sinal quero enviar a um processamento paralelo e somar de volta? **LOOP INSERT:** como quero transformar o sinal que voltará pela realimentação interna?

**ALFA · guia da implementação atual.** Os mapas são conceituais e omitem detalhes de suavização, compensação e proteção para tornar o percurso legível. Não são capturas da interface. As receitas precisam ser conferidas na edição e no release usados.

## Onde encontrar os controles

**Plugin:** abra FX. O painel de barramentos mostra FX A, FX B, AUX e LOOP INSERT. Selecione o slot desejado para abrir a edição do efeito. **Web/APK:** FX oferece abas FX A, FX B, AUX e LOOP; entre no barramento e selecione um slot. Recursos como IR e opções novas podem diferir entre edições.

| Caminho | Controles do barramento | Confira |
|---|---|---|
| FX A / FX B | ON, MIX, slots | Tipo, mistura e ordem A/B |
| AUX | ON, SEND, RETURN, PRE/POST, slots | Sinal enviado, retorno e ponto de tomada |
| LOOP INSERT | ON, slots; FEEDBACK e TIME associados ao laço | Processamento do retorno e quantidade de realimentação |

Os controles do barramento ficam separados dos controles do efeito selecionado. MIX do DELAY, MIX de FX A, AUX SEND e FEEDBACK do laço não são versões do mesmo knob.

## AUX: acrescentar um caminho ao principal

O AUX recebe uma cópia do sinal escolhido, processa seus slots e soma o retorno **depois de FX A/B**. O caminho principal continua existindo. É útil para acrescentar ecos, salas e texturas sem obrigar todo o sinal principal a atravessá-los.

<!-- visual:aux-flow -->

**SEND** controla quanto sinal novo chega ao AUX. **RETURN** controla o nível do resultado que volta. **ON** liga/desliga a contribuição do barramento. Também precisam existir slots com processamento ativo.

### PRE e POST: de onde vem a cópia?

- **PRE:** recebe o sinal antes de FX A e FX B, sem as transformações feitas nesses dois barramentos.
- **POST:** recebe o resultado depois de FX A/B, seja qual for o roteamento A > B, B > A ou A // B.
- Nos dois casos, o retorno AUX é acrescentado depois de A/B. PRE não significa que a reverb do AUX será colocada antes de FX A na cadeia principal.

Compare DISTORT em FX A e ROOM no AUX. Em PRE, ROOM recebe o sinal antes da distorção de A. Em POST, recebe o sinal transformado por A/B. A matéria que alimenta a sala muda, não apenas seu volume.

### SEND, RETURN e cauda

| Gesto | O que muda | O que não presumir |
|---|---|---|
| Aumentar SEND | Mais sinal entra no processamento | Não é apenas aumentar a saída do efeito |
| Levar SEND a zero | Deixa de entrar sinal novo pelo envio | A cauda ou material já guardado pode continuar |
| Abaixar RETURN | Reduz o resultado somado ao principal | O efeito pode continuar processando internamente |
| RETURN em 0 dB | Retorno sem ganho/atenuação adicional nesse controle | Não significa desligado |
| Desligar AUX | Retira a contribuição do barramento | Não equivale a parar de alimentar e deixar a cauda terminar |

RETURN é expresso em **dB**; SEND representa quantidade de envio. Seus números não são diretamente comparáveis. O mínimo de RETURN também não deve ser tomado automaticamente como silêncio absoluto; use ON para desligar o barramento.

### Por que MIX pode parecer diferente no AUX?

O AUX usa o retorno processado, sem acrescentar uma nova cópia seca pelo controle de mistura dos efeitos que oferecem esse percurso. Ajuste a presença principalmente em **SEND e RETURN**, e use os parâmetros do efeito para moldar seu caráter. Modelos específicos podem dar interpretação própria a alguns controles; consulte os rótulos do modo.

No caminho principal, o efeito e o MIX do barramento podem combinar seco e processado. No AUX, a fonte principal já segue por outro caminho. Não espere que um MIX interno repita obrigatoriamente o comportamento do mesmo efeito em FX A.

### Receita: sala ao redor de uma nota

1. Comece com o FEEDBACK global em zero.
2. Coloque ROOM em AUX e ligue o efeito e o barramento.
3. Use RETURN em 0 dB como referência e SEND inicialmente em zero, com volume físico baixo.
4. Toque notas curtas e aumente SEND aos poucos. AMOUNT da ROOM muda sua duração/característica.
5. Volte SEND a zero e acompanhe a cauda. Depois compare com desligar AUX.

Se nada aparecer, confira slot, efeito ON, AUX ON, SEND, RETURN e sinal na fonte. Um slot NONE não cria uma sala.

### Receita: um eco enviado por gesto

Coloque DELAY no AUX, com tempo e feedback interno moderados. Parta de SEND zero, toque uma nota e aumente SEND brevemente; depois retorne a zero. O gesto escolhe quanto material novo entra no eco. A continuidade depende do DELAY e de seu próprio FEEDBACK/FREEZE.

Uma macro endereçada a AUX SEND pode fazer esse gesto. Não é necessário aumentar o FEEDBACK global para ter repetições de DELAY.

## LOOP INSERT: processar o que vai voltar

O laço interno guarda uma cópia do sinal numa linha de atraso. Ela retorna com a quantidade de **FEEDBACK** e é somada novamente ao resultado. LOOP INSERT processa essa cópia **antes de ela entrar na memória**.

<!-- visual:loop-flow -->

A tomada que alimenta o laço fica **depois de LEVEL e antes da guarda final de saída**. Pode conter vozes, seus efeitos, retorno AUX, entrada audível e material de voltas anteriores. O retorno passa por suas proteções antes de voltar à soma.

**No Usina, o retorno não é enviado automaticamente de volta à entrada de FX A/B ou do AUX.** O processamento repetido em cada volta é o de LOOP INSERT. Uma reverb em FX A faz parte da cópia inicial, mas não ocupa o mesmo papel de uma reverb inserida no laço.

### Quais controles fazem o quê?

| Controle | Papel |
|---|---|
| FEEDBACK global | Quanto do material guardado retorna |
| TIME do laço | Distância temporal da leitura na memória |
| Slots LOOP INSERT | Transformação do sinal que será guardado |
| ON de LOOP INSERT | Ativa/desativa os efeitos desse caminho |
| LEVEL | Participa da alimentação da memória; não é apenas um monitor depois do laço |
| CEILING / guarda | Proteção de saída; não substitui controlar a energia de cada processo |

**FEEDBACK zero:** a contribuição de retorno é zero, mesmo com efeitos no insert. **LOOP INSERT desligado:** o laço pode continuar retornando sem esses efeitos. **FX global desligado:** não deve ser usado como sinônimo de FEEDBACK zero. Para interromper o retorno, confira FEEDBACK.

Com um insert ativo, o processamento por blocos impõe um tempo mínimo ao laço. Tempos muito curtos podem depender do bloco do sistema/host. O controle não promete atraso físico idêntico em todos os ambientes.

### O que se acumula a cada volta?

Pense numa folha recopiada: uma transformação no caminho da cópia reaparece nas gerações seguintes. Saturação, grãos, ecos e outros processos podem alterar o material repetidamente. O efeito também pode ter memória e feedback próprios.

- DISTORT no laço pode transformar mais o material em cada passagem.
- DELAY no laço combina TIME global com o tempo e a realimentação internos do DELAY.
- TEXTURE/VAPOR podem manter e reorganizar material; FREEZE acrescenta outro estado de memória.
- Efeitos no AUX ou A/B modificam a fonte que entra no laço, mas não são automaticamente seu insert de retorno.

Essas relações não garantem som ou nível previsíveis. Ganho, mistura, tempo, entrada e proteções participam do resultado.

### Receita: reconhecer primeiro uma volta

1. Salve o patch e deixe microfone/IN MIX em zero para começar sem laço acústico externo.
2. Comece sem efeito no LOOP INSERT, FEEDBACK zero e tempo de laço espaçado o suficiente para reconhecer repetições.
3. Toque uma nota curta. Aumente FEEDBACK devagar a partir de zero, com volume físico moderado.
4. Volte FEEDBACK a zero para comparar e interromper sua contribuição.
5. Só depois insira um efeito no LOOP INSERT e compare com pouco retorno.

Escolha um efeito que você já reconheça. Evite começar com ganhos, densidades e feedbacks internos altos. Não há valor numérico universal que garanta audição segura.

## Três coisas chamadas feedback

| Lugar | O que retorna |
|---|---|
| FB de operador FM / diagonal USER | Sinal dentro do operador/rede |
| FEEDBACK do DELAY, TEXTURE ou VAPOR | Material na memória daquele efeito |
| FEEDBACK global com LOOP INSERT | Cópia do sinal no laço da instância |

Eles podem coexistir. Diminuir um não garante parar os demais. Para investigar um som que continua, confira também HOLD, sustain, sequência, FREEZE e caudas.

## Se algo não se comportar como esperado

- **AUX não aparece:** confira slot, efeito ON, AUX ON, SEND e RETURN.
- **SEND zero, mas ainda soa:** pode haver cauda ou material retido. Compare com AUX desligado.
- **PRE não colocou o AUX antes de A/B:** PRE escolhe a origem do envio; o retorno continua depois dos barramentos principais.
- **Insert muda pouco com FEEDBACK zero:** ele trata a cópia que voltaria; não substitui o caminho direto.
- **Desliguei LOOP INSERT, mas continua repetindo:** desligar o insert não é zerar o retorno global.
- **LEVEL muda o laço:** a tomada para a memória fica depois desse controle.
- **A guarda atua muito:** reduza energia na fonte e nos retornos. Sua atuação não indica volume acústico seguro.

Em caso de nível inesperado, reduza primeiro o volume físico e interrompa reprodução/entrada. Retome com retornos baixos e uma parte por vez. As proteções do instrumento não controlam ganhos posteriores nem o volume do equipamento.

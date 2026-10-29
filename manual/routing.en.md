# AUX and LOOP INSERT · audio paths

[Português](routing.md) · [Main manual](README.en.md) · [Effects](modules.en.md#bus-effects) · [Modulation examples](modulation.en.md)

AUX sends a copy to parallel processing and adds its return. LOOP INSERT processes the material stored for global feedback. The maps omit smoothing, compensation and protection details; they explain paths, not exact screen positions or measured responses. This is an alpha guide; the final release still needs technical review.

## Find the controls

In the plugin, open FX and select a bus and slot. Web/APK uses FX A, FX B, AUX and LOOP tabs. IR and newer options may differ between editions.

| Path | Controls |
|---|---|
| FX A / FX B | ON, MIX, three slots; A > B, B > A or A // B routing |
| AUX | ON, SEND, RETURN, PRE/POST, three slots |
| LOOP INSERT | ON and three slots; global FEEDBACK and TIME define the loop |

An effect's own MIX, a bus MIX, AUX SEND and global FEEDBACK are separate controls.

## AUX: parallel processing

AUX receives a copy, processes its slots and adds the return **after FX A/B**. The main path remains present.

```text
PRE:  voices ──┬── FX A/B ───────────┬── output
               └── SEND → AUX → RETURN ┘
POST: voices ── FX A/B ──┬───────────┬── output
                        └─ SEND → AUX → RETURN ┘
```

PRE takes the copy before FX A/B. POST takes it after their selected series/parallel routing. In both cases, the AUX return is added after A/B. PRE does not insert the AUX effect before FX A in the main chain.

Compare DISTORT in FX A with ROOM in AUX. PRE feeds ROOM before the distortion; POST feeds the transformed result. This changes what excites the room, not only its volume.

### SEND, RETURN and tails

| Action | Result and limit |
|---|---|
| Raise SEND | More new signal enters processing |
| Set SEND to zero | New send input stops; retained material/tails may continue |
| Lower RETURN | Reduces the result added to main; processing may continue |
| RETURN at 0 dB | No added gain/attenuation at that control; not off |
| AUX off | Removes bus contribution; differs from waiting for a tail to finish |

RETURN is in dB; SEND is a send amount. The minimum RETURN setting must not be assumed to mean absolute silence; use ON to disable the bus.

AUX uses the processed return without adding another dry copy through effect mix controls that provide this behavior. Use SEND/RETURN for contribution and effect parameters for character. Models can interpret individual controls differently. The same internal MIX need not behave identically in AUX and FX A.

### Example: room around a short note

1. Start with global FEEDBACK zero and low physical volume.
2. Put ROOM in AUX; enable the effect and bus.
3. Use RETURN at 0 dB as reference, SEND initially zero.
4. Play short notes and raise SEND gradually. AMOUNT shapes ROOM.
5. Return SEND to zero and listen to the tail; compare with AUX off.

Check slot, effect ON, AUX ON, SEND, RETURN and input signal if nothing appears. NONE does not create a room.

### Example: a brief delay send

Put DELAY in AUX with moderate time and internal feedback. Start SEND at zero, play a note, raise SEND briefly and return it to zero. A macro assigned to AUX SEND can perform this gesture. Repeats depend on DELAY's own FEEDBACK/FREEZE; global FEEDBACK is not required for ordinary delay repeats.

## LOOP INSERT: processing the stored return

The internal loop stores a copy in a delay line, then returns it according to global FEEDBACK. LOOP INSERT processes the copy **before storage**.

```text
voices / A/B / AUX / audible input + protected return → LEVEL → output guard → output
                                                        └→ LOOP INSERT → memory
                                                                          └→ FEEDBACK → protected return
```

The storage tap is after LEVEL and before the final output guard. Its signal can include voices, effects, AUX return, audible input and previous loop material. The return passes through protections before rejoining the sum.

**The return does not automatically re-enter FX A/B or AUX.** LOOP INSERT is the processing repeated in the feedback path. A reverb in FX A can be part of the initial copy, but does not have the same role as a reverb inserted in this loop.

| Control | Role |
|---|---|
| Global FEEDBACK | Amount of stored material returned |
| Loop TIME | Read distance in the memory |
| LOOP INSERT slots | Transformation before storage |
| LOOP INSERT ON | Enable/bypass effects in that path |
| LEVEL | Participates in feeding memory, not just final monitoring |
| CEILING / output guard | Output protection; not a substitute for controlling source energy |

FEEDBACK zero removes return contribution. LOOP INSERT off bypasses its effects but can leave the loop returning. Global FX off is not a synonym for FEEDBACK zero. With an insert active, block processing imposes a minimum loop time; very short timing can depend on host/system block size.

### Repeated transformations

DISTORT can transform each new pass. DELAY combines global loop TIME with its own time and feedback. TEXTURE/VAPOR can retain/reorganize material; FREEZE adds another memory state. Effects can have their own feedback in addition to the global loop.

Gain, mix, time, input and protections all affect the result. These relationships do not guarantee a predictable level.

### Example: identify one return first

1. Save the patch; start with microphone/IN MIX zero.
2. Use no LOOP INSERT effect, global FEEDBACK zero and a time long enough to distinguish repeats.
3. Play a short note; raise FEEDBACK slowly from zero at moderate physical volume.
4. Return FEEDBACK to zero and compare.
5. Add one familiar insert effect with a small return amount.

Avoid starting with large internal gains, densities and feedbacks. No numeric setting guarantees safe hearing.

## Distinguish feedback paths

| Location | What returns |
|---|---|
| FM FB / USER diagonal | Operator/network signal |
| DELAY, TEXTURE or VAPOR FEEDBACK | Material in that effect's memory |
| Global FEEDBACK with LOOP INSERT | Copy in the instance feedback path |

Reducing one does not stop all others. Also check HOLD, sustain, SEQ, FREEZE and tails. If levels become unexpected, lower physical volume and stop playback/input before investigating. The instrument cannot control later gain stages or acoustic headphone/speaker level.

from subit64 import encode, decode, FSM

value = encode({"A":1, "B":0, "C":1, "D":0, "E":0, "F":1})
print("Encoded:", value)

axes = decode(value)
print("Decoded:", axes)

fsm = FSM({37: {"act": 41}})
next_state = fsm.next(value, "act")
print("Next state:", next_state)

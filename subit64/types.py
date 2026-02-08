from dataclasses import dataclass
from typing import Dict

@dataclass
class State:
    value: int

@dataclass
class Intent:
    state: int
    goal: str

@dataclass
class Action:
    intent: Intent
    command: str

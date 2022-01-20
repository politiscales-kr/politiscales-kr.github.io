#!/bin/bash

cp quiz.raw.js quiz.js

{ cat questions.md | awk '/[0-9]\..*/' | awk '{$1="";print substr($0,2)}' ; cat questions.md | awk '/[0-9]\..*/' | awk '{$1="";print substr($0,2)}' ; } | sed 

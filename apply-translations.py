import os, re

os.system("cp quiz.raw.js quiz.js")

parse_questions = lambda fname: [frag[3:].lstrip() for frag in re.findall('[0-9]\..*', open(fname, "r").read())]
[(print(cmd), os.system(cmd)) for cmd in ['sed -i "s;{origin};{replacement};g" quiz.js'.format(origin=element[0], replacement=element[1]) for element in zip(parse_questions("questions.md"), parse_questions("questions-kr.md"))]]


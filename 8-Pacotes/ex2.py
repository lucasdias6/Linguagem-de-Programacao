import pyfiglet
from colorama import Fore, Back, Style, init

init()

texto_arte = pyfiglet.figlet_format("Turma 202!", font="slant")

print(Fore.BLUE + texto_arte)
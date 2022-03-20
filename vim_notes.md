## Basics

VIM RC edit --- $vim ~/.vimrc\
INSTALL plugs --- $source%, then :PlugInstall\
Flip between vim & terminal: Ctrl + Z (in vim), $fg (in terminal)

## Vim Commands

```
!node % --- runs JS file in Node
Vexplore --- file tree

ctrl + ww --- switch pane

:sp & :vsp --- make another screen
:e "../../.." --- jump to file (you fill in the ..)
:e %h/filename --- make a new file in current file's directory
:/xxx --- search for 'xxx' in file
n --- jump to next searched word
N --- jump to previous searched word
:ctrlSF xxx --- search entire project folder for 'xxx'
:%s/xxx/yyy/g --- search & replace all (g=greedy)
:set nonumber --- remove line numbers
* --- jump to next word under cursor (similar to cmd + d in vstudio)
```

## Nerdtree

```

ma --- make a new file or folder
r --- refresh file tree in cursor root to see created file or remove deleted file
R --- refresh file root
ctrl + b --- open Nerdtree panel
ctrl + ww --- swtich between nerdtree and panel
```

## View mode

```
yy --- copy
p --- paste
C-w --- when VIM gets stuck
O --- insert new line below
G --- go to end of the file
gg --- jump to start of the file
vyp --- block text copy+pasta
v --- text selection
I --- jump to front of line and edit
a --- start typing in next spot
A --- start typing at the end of the line
B --- jump to word, backwards
W --- jump to word, forwards
b --- jump spaces and word, backwards
w --- jump spaces and word, forwards
$ --- jump to end of line
dw --- delete one word
x --- delete one char
X --- backspace
D --- delete line to cursor position
p --- paste under line
P --- paste above line
z --- to move scroller, similar to screen lock
yw --- yank word
O --- new line above
R --- replace mode, overwrites
r --- replace one char
Cw --- delete word, insert mode
zz --- center screen
V --- highlight line
^ --- jump to front of line
```

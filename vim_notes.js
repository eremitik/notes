VIM RC edit --- $vim ~/.vimrc
INSTALL plugs --- $source%, then :PlugInstall

Flip between vim & terminal: Ctrl + Z (in vim), $fg (in terminal)

Vim Commands
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

(in Nerdtree) ma --- make a new file or folder
(in Nerdtree) r --- refresh file tree in cursor root to see created file or remove deleted file
(in Nerdtree) R --- refresh file root

(viewmode) yy --- copy
(viewmode) p --- paste
(viewmode) C-w --- when VIM gets stuck
(viewmode) O --- insert new line below
(viewmode) G --- go to end of the file
(viewmode) gg --- jump to start of the file
(viewmode) vyp --- block text copy+pasta
(viewmode) v --- text selection
(viewmode) I --- jump to front of line and edit
(viewmode) a --- start typing in next spot
(viewmode) A --- start typing at the end of the line
(viewmode) B --- jump to word, backwards
(viewmode) W --- jump to word, forwards
(viewmode) b --- jump spaces and word, backwards
(viewmode) w --- jump spaces and word, forwards
(viewmode) $ --- jump to end of line
(viewmode) dw --- delete one word
(viewmode) x --- delete one char
(viewmode) X --- backspace
(viewmode) D --- delete line to cursor position
(viewmode) p --- paste under line
(viewmode) P --- paste above line
(viewmode) z --- to move scroller, similar to screen lock
(viewmode) yw --- yank word
(viewmode) O --- new line above
(viewmode) R --- replace mode, overwrites
(viewmode) r --- replace one char
(viewmode) Cw --- delete word, insert mode
(viewmode) zz --- center screen
(viewmode) V --- highlight line
(viewmode) ^ --- jump to front of line


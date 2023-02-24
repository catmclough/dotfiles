" Install vim-plug if not found
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif

" Run PlugInstall if there are missing plugins
" Note that this may increase the startup time of Vim.

autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | source $MYVIMRC
\| endif

call plug#begin('~/.vim/plugged')

Plug 'flazz/vim-colorschemes'
Plug 'blueshirts/darcula'
Plug 'xolox/vim-colorscheme-switcher'
Plug 'xolox/vim-misc'


Plug 'moll/vim-node'
Plug 'godlygeek/tabular'
Plug 'plasticboy/vim-markdown'
Plug 'jtratner/vim-flavored-markdown'
Plug 'burke/matcher'
Plug 'scrooloose/nerdtree'
Plug 'scrooloose/syntastic'
Plug 'terryma/vim-multiple-cursors'
Plug 'mxw/vim-jsx'
Plug 'pangloss/vim-javascript'
Plug 'ctrlpvim/ctrlp.vim'

Plug 'scrooloose/nerdcommenter'
Plug 'haishanh/night-owl.vim'

" All of your Plugins must be added before the following line
call plug#end()            " required

" Brief help
" :PlugInstall    - installs plugins
" :PlugUpdate     - installs or updates plugins
" :PlugClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" unsure about these vvv
" :PlugList       - lists configured plugins
" :PlugSearch foo - searches for foo; append `!` to refresh local cache
"
" see :h vundle for more details or wiki for FAQ

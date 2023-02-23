#!/bin/bash

export TERM=xterm-256color
export CLICOLOR=1
export LSCOLORS=Fafacxdxbxegedabagacad

# PROMPT STUFF
GREEN=$(tput setaf 2);
YELLOW=$(tput setaf 3);
RESET=$(tput sgr0);

function git_branch {
  # Shows the current branch if in a git repository
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\ \(\1\)/';
}

function random_element {
  declare -a array=("$@")
  r=$((RANDOM % ${#array[@]}))
  printf "%s\n" "${array[$r]}"
}

# Default Prompt
setEmoji () {
  EMOJI="$*"
  DISPLAY_DIR='$(dirs)'
  DISPLAY_BRANCH='$(git_branch)'
  PROMPT="${YELLOW}${DISPLAY_DIR}${GREEN}${DISPLAY_BRANCH}${RESET} ${EMOJI}"$'\n'"$ ";
}

newRandomEmoji () {
  setEmoji "$(random_element 👽 🔥 🚀 👾 🍔 🐑 😎 🏎 🤖 😇 🦄  🌮 💯 ⚛️  🐠 🐳 🐿 🥳 🤩 🤯 🤠 💻 🦸‍ 🧞‍  🚀 🔬 🕺 🦁 🐶 🐵 🐻 🦊 🐙 🦎 🦖 🦕 🦍 🦈 🐊 🐍 🐢 🐘 🐉 🦜 🦧 🦭 🦥 🦦 🦞 🥑 🍶 🥊 🦚 ✨ ☄️ ⚡️ 💥 💫 🧬 🔮 🔭 ⚪️ ⚽️ 🎧 🛻 🛟  🌋 🎢 🏕 🌸 🏄🏼‍♂️ 🪴 🌊 🌈 🇫🇷 🏁 🇸🇿 🧢 🇯🇵 ☘️  🇮🇪)"
}

newRandomEmoji

alias jestify="PS1=\"🃏\"$'\n'\"$ \"";
alias testinglibify="PS1=\"🐙\"$'\n'\"$ \"";
alias cypressify="PS1=\"🌀\"$'\n'\"$ \"";
alias staticify="PS1=\"🚀\"$'\n'\"$ \"";
alias nodeify="PS1=\"💥\"$'\n'\"$ \"";
alias reactify="PS1=\"⚛️\"$'\n'\"$ \"";
alias harryify="PS1=\"🧙‍\"$'\n'\"$ \"";

# ripgrep config
RIPGREP_CONFIG_PATH=$HOME/.ripgreprc

# allow substitution in PS1
setopt promptsubst

# history size
HISTSIZE=5000
HISTFILESIZE=10000

SAVEHIST=5000
setopt EXTENDED_HISTORY
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
# share history across multiple zsh sessions
setopt SHARE_HISTORY
# append to history
setopt APPEND_HISTORY
# adds commands as they are typed, not at shell exit
setopt INC_APPEND_HISTORY
# do not store duplications
setopt HIST_IGNORE_DUPS

# PATH ALTERATIONS
## Node
PATH="/usr/local/bin:$PATH:./node_modules/.bin";

# ZSH Auto-Suggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

## Yarn
# PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
# alias yarn="echo update the PATH in ~/.zshrc"

# Custom bins
PATH="$PATH:$HOME/.bin";
<<<<<<< HEAD
=======
# dotfile bins
PATH="$PATH:$HOME/.my_bin";
# npm.im/n
export N_PREFIX="$HOME/n"; [[ :$PATH: == *"$N_PREFIX/bin"* ]] || PATH="$N_PREFIX/bin:$PATH"  # Added by n-install (see http://git.io/n-install-repo).
>>>>>>> master

# script kit
PATH="$PATH:$HOME/.kenv/bin:$HOME/.kit/bin";

# CDPATH ALTERATIONS
CDPATH=.:$HOME:$HOME/code:$HOME/code/epic-react:$HOME/code/testingjavascript:$HOME/Desktop
# CDPATH=($HOME $HOME/code $HOME/Desktop)

# disable https://scarf.sh/
SCARF_ANALYTICS=false

# Custom Aliases
alias code="\"/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code\""
function c { code ${@:-.} }
alias ll="ls -1a";
alias ..="cd ../";
alias ..l="cd ../ && ll";
alias pg="echo 'Pinging Google' && ping www.google.com";
alias vz="vim ~/.zshrc";
alias cz="code ~/.zshrc";
alias sz="source ~/.zshrc";
alias de="cd ~/Desktop";
alias d="cd ~/code";
alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
alias deleteDSFiles="find . -name '.DS_Store' -type f -delete"
alias kcd-oss="npx -p yo -p generator-kcd-oss -c 'yo kcd-oss'";
function crapp { cp -R ~/.crapp "$@"; }
function mcrapp { cp -R ~/.mcrapp "$@"; }
alias npm-update="npx npm-check-updates --dep prod,dev --upgrade";
alias yarn-update="yarn upgrade-interactive --latest";
alias flushdns="sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder"
alias dont_index_node_modules='find . -type d -name "node_modules" -exec touch "{}/.metadata_never_index" \;';
alias check-nodemon="ps aux | rg -i '.bin/nodemon'";
<<<<<<< HEAD
alias bs="browser-sync start --server --files 'assets/styles/*.css,index.html'"
=======
>>>>>>> master

## git aliases
function gc { git commit -m "$@"; }
alias gs="git status";
alias gp="git pull";
alias gf="git fetch";
alias gpush="git push";
alias gd="git diff";
alias ga="git add .";
dif() { git diff --color --no-index "$1" "$2" | diff-so-fancy; }
cdiff() { code --diff "$1" "$2"; }

## npm aliases
alias ni="npm install";
alias nrs="npm run start -s --";
alias nrb="npm run build -s --";
alias nrd="npm run dev -s --";
alias nrt="npm run test -s --";
alias nrtw="npm run test:watch -s --";
alias nrv="npm run validate -s --";
alias rmn="rm -rf node_modules";
alias flush-npm="rm -rf node_modules package-lock.json && npm i && say NPM is done";
alias nicache="npm install --prefer-offline";
alias nioff="npm install --offline";

## yarn aliases
alias yar="yarn run";
alias yas="yarn run start";
alias yab="yarn run build";
alias yat="yarn run test";
alias yav="yarn run validate";
alias yoff="yarn add --offline";
alias ypm="echo \"Installing deps without lockfile and ignoring engines\" && yarn install --no-lockfile --ignore-engines"

# Custom functions
mg () { mkdir "$@" && cd "$@" || exit; }
cdl() { cd "$@" && ll; }
npm-latest() { npm info "$1" | grep latest; }
killport() { lsof -i tcp:"$*" | awk 'NR!=1 {print $2}' | xargs kill -9 ;}
function quit () {
  if [ -z "$1" ]; then
    # display usage if no parameters given
    echo "Usage: quit appname"
  else
    for appname in $1; do
    osascript -e 'quit app "'$appname'"'
    done
  fi
}

gif() {
  ffmpeg -i "$1" -vf "fps=25,scale=iw/2:ih/2:flags=lanczos,palettegen" -y "/tmp/palette.png"
  ffmpeg -i "$1" -i "/tmp/palette.png" -lavfi "fps=25,scale=iw/2:ih/2:flags=lanczos [x]; [x][1:v] paletteuse" -f image2pipe -vcodec ppm - | convert -delay 4 -layers Optimize -loop 0 - "${1%.*}.gif"
}

autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'
<<<<<<< HEAD

source ~/.zshrc.private
alias yarn="newt exec yarn"
alias npm="newt exec npm"

# BDP Upsername
export BD_USER=catm

# Source Java Version Manager
source ~/.sdkman/bin/sdkman-init.sh

# Python
eval "$(pyenv init -)"

# Airtable CLI - get field IDs with jq
at_to_bdpschema() {
  read atschema

  echo $atschema | jq .fields | jq 'map((.name|ascii_downcase|sub("\\s+"; "_"; "g")) + ": " + .id)' | jq '.[]' -r
}

at_field_names() {
  read atschema

  echo $atschema | jq .fields | jq 'map(.id + ": " + .name)' | jq '.[]' -r
}


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

eval $(thefuck --alias)
# You can use whatever you want as an alias, like for Mondays:
eval $(thefuck --alias FUCK)
eval $(thefuck --alias shit)
=======
# Bash completion
# TODO: couldn't get this to work with zsh...
# autoload bashcompinit
# bashcompinit
# if [ -f "$(brew --prefix)/etc/bash_completion" ]; then
# . "$(brew --prefix)/etc/bash_completion"
# fi
source ~/.zshrc.private
>>>>>>> master

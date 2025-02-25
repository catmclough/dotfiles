#!/bin/zsh

export TERM=xterm-256color
export CLICOLOR=1
export LSCOLORS=Fafacxdxbxegedabagacad

# PROMPT STUFF
GREEN=$(tput setaf 2);
YELLOW=$(tput setaf 3);
RESET=$(tput sgr0);

# Shows the current branch if in a git repository
function git_branch {
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
    setEmoji "$(random_element 👽 🔥 🚀 👾 🍔 🐑 😎 🏎 🤖 😇 🦄  🌮 💯 ⚛️  🐠 🐳 🐿 🤯 🤠 💻 🦸‍ 🧞‍  🚀 🔬 🕺 🦁 🐶 🐵 🐻 🦊 🐙 🦎 🦖 🦕 🦍 🦈 🐊 🐍 🐢 🐘 🐉 🦜 🦧 🦭 🦥 🦦 🦞 🥑 🍶 🥊 🦚 ✨ ☄️ ⚡️ 💥 💫 🧬 🔮 🔭 ⚪️ ⚽️ 🎧 🛻 🛟  🌋 🎢 🏕 🌸 🏄🏼‍♂️ 🪴 🌊 🌈 🇫🇷 🏁 🇸🇿 🧢 🇯🇵 ☘️  🇮🇪)"
}

newRandomEmoji

# ripgrep config
export RIPGREP_CONFIG_PATH=$HOME/.ripgreprc

# allow substitution in PS1
setopt promptsubst

# History configuration
HISTSIZE=5000
SAVEHIST=5000
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
setopt EXTENDED_HISTORY
setopt SHARE_HISTORY
setopt APPEND_HISTORY
setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_DUPS

# PATH configurations
path=(
    /usr/local/bin
    ./node_modules/.bin
    $HOME/.bin
    $HOME/.local/bin
    $HOME/.kenv/bin
    $HOME/.kit/bin
    $HOME/.yarn/bin
    $HOME/.config/yarn/global/node_modules/.bin
    $path
)
export PATH

# ZSH Auto-Suggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# CDPATH ALTERATIONS
CDPATH=.:$HOME:$HOME/code:$HOME/code/epic-react:$HOME/code/testingjavascript:$HOME/Desktop

# disable https://scarf.sh/
export SCARF_ANALYTICS=false

# Custom Aliases
alias code="\"/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code\""
function c { code ${@:-.} }
alias ll="ls -1a"
alias ..="cd ../"
alias ..l="cd ../ && ll"
alias pg="echo 'Pinging Google' && ping www.google.com"
alias vz="vim ~/.zshrc"
alias cz="code ~/.zshrc"
alias sz="source ~/.zshrc"
alias de="cd ~/Desktop"
alias d="cd ~/code"
alias wu="cd ~/code/workflow-ui"
alias bdp="cd ~/code/bdp-workflows"
alias gw="cd ~/code/genesis-web"
alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
alias deleteDSFiles="find . -name '.DS_Store' -type f -delete"
alias kcd-oss="npx -p yo -p generator-kcd-oss -c 'yo kcd-oss'"

# Custom functions
function crapp { cp -R ~/.crapp "$@" }
function mcrapp { cp -R ~/.mcrapp "$@" }
alias npm-update="npx npm-check-updates --dep prod,dev --upgrade"
alias yarn-update="yarn upgrade-interactive --latest"
alias flushdns="sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder"
alias dont_index_node_modules='find . -type d -name "node_modules" -exec touch "{}/.metadata_never_index" \;'
alias check-nodemon="ps aux | rg -i '.bin/nodemon'"
alias bs="browser-sync start --server --files 'assets/styles/*.css,index.html'"
alias vpn="sudo kill -SEGV \$(ps aux | grep dsAccessService | grep Ss | awk '{print \\$2}')"

# Git aliases with improved functions
function gc { git commit -m "$@" }
alias gs="git status"
alias gp="git pull"
alias gf="git fetch"
alias gpush="git push"
alias gd="git diff"
alias ga="git add ."
dif() { git diff --color --no-index "\$1" "\$2" | diff-so-fancy }
cdiff() { code --diff "\$1" "\$2" }

# NPM aliases
alias ni="npm install"
alias nrs="npm run start -s --"
alias nrb="npm run build -s --"
alias nrd="npm run dev -s --"
alias nrt="npm run test -s --"
alias nrtw="npm run test:watch -s --"
alias nrv="npm run validate -s --"
alias rmn="rm -rf node_modules"
alias flush-npm="rm -rf node_modules package-lock.json && npm i && say NPM is done"
alias nicache="npm install --prefer-offline"
alias nioff="npm install --offline"

# Yarn aliases
alias yar="yarn run"
alias yas="yarn run start"
alias yab="yarn run build"
alias yat="yarn run test"
alias yav="yarn run validate"
alias yoff="yarn add --offline"
alias ypm="echo \"Installing deps without lockfile and ignoring engines\" && yarn install --no-lockfile --ignore-engines"

# Enhanced custom functions
mg () { mkdir "$@" && cd "$@" || exit }
cdl() { cd "$@" && ll }
npm-latest() { npm info "\$1" | grep latest }
killport() {
    if [[ ! "\$1" =~ ^[0-9]+$ ]]; then
        echo "Please provide a valid port number"
        return 1
    fi
    lsof -i tcp:"\$1" | awk 'NR!=1 {print \$2}' | xargs -r kill -9
}

function quit () {
    if [ -z "\$1" ]; then
        echo "Usage: quit appname"
    else
        for appname in \$1; do
            osascript -e 'quit app "'$appname'"'
        done
    fi
}

gif() {
    ffmpeg -i "\$1" -vf "fps=25,scale=iw/2:ih/2:flags=lanczos,palettegen" -y "/tmp/palette.png"
    ffmpeg -i "\$1" -i "/tmp/palette.png" -lavfi "fps=25,scale=iw/2:ih/2:flags=lanczos [x]; [x][1:v] paletteuse" -f image2pipe -vcodec ppm - | convert -delay 4 -layers Optimize -loop 0 - "${1%.*}.gif"
}

# Enhanced completion system
autoload -Uz compinit && compinit
zstyle ':completion:*' menu select
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'
zstyle ':completion:*' completer _complete _correct _approximate

# Tool execution through newt
alias yarn="newt exec yarn"
alias npm="newt exec npm"
alias node='newt exec node'

# BDP Username
export BD_USER=catm

# Python (lazy loading)
pyenv() {
    eval "$(command pyenv init -)"
    eval "$(command pyenv virtualenv-init -)"
    pyenv "$@"
}

# Java configuration
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home"
export M2_HOME="${HOME}/apache-maven-3.9.5"
path=(
    ${JAVA_HOME}/bin
    ${M2_HOME}/bin
    $path
)

# Airtable CLI functions
at_to_bdpschema() {
    read atschema
    echo $atschema | jq .fields | jq 'map((.name|ascii_downcase|sub("\\s+"; "_"; "g")) + ": " + .id)' | jq '.[]' -r
}

at_field_names() {
    read atschema
    echo $atschema | jq .fields | jq 'map(.id + ": " + .name)' | jq '.[]' -r
}

# NVM configuration with auto-use
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Auto-use NVM
autoload -U add-zsh-hook
load-nvmrc() {
    local nvmrc_path="$(nvm_find_nvmrc)"
    if [ -n "$nvmrc_path" ]; then
        local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")
        if [ "$nvmrc_node_version" = "N/A" ]; then
            nvm install
        elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
            nvm use
        fi
    elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
        nvm use default
    fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

# TheFuck configuration
eval $(thefuck --alias)
eval $(thefuck --alias FUCK)
eval $(thefuck --alias shit)

# iTerm2 integration
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"


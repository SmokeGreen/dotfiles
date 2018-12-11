export PS1="[\u@\h:\W]$ "
export PATH="$PATH:/usr/lib/go-1.10/bin"

# read .bashrc
if [ -f ~/.bashrc ] ; then
. ~/.bashrc
fi


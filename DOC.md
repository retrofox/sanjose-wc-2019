Documentación Adicional
-----------------------


## <a name="step-presentation">Paso básico: Primeras acciones en el teclado

* Log: `git log` y comandos git customizados.

```gitconfig
[alias]
	Shortening aliases
	co = checkout
	cob = checkout -b
	f = fetch -p
	c = commit
	p = push
	ba = branch -a
	bd = branch -d
	bD = branch -D
	dc = diff --cached

	# show history branches
	history-branch = "!f() { git for-each-ref --count=20 --sort=-committerdate refs/heads/ | sed 's/refs\\/heads\\/\\(.*\\)/\\1/'; }; f"

	# adding and ammening on the fly
	addmend = "!f() { git add $1; git commit --amend -v; }; f"

	# rebase: adding anc continuing on the fly
	addcontinue = "!f() { git add $1; git rebase --continue; }; f"

	redo = "!f() { git branch -D $1; git checkout -b $1; git rebase -i master; }; f"

	# git log
	lg = log --color --graph --pretty=format:'%C(dim)%C(cyan)%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
	plg = log --graph --pretty='format:%C(red)%d%C(reset) %C(yellow)%h%C(reset) %ar %C(green)%aN%C(reset) %s'
	tlg = log --stat --since='1 Day Ago' --graph --pretty=oneline --abbrev-commit --date=relative

	# Feature improving aliases
	st = status -sb
	a = add -p

	# remove all merged branches
	bdm = "!git branch --merged | grep -v '*' | xargs -n 1 git branch -d"

	# contriburos rank
	rank = shortlog -sn --no-merges
```

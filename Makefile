wordpress:
	echo "What is the project name?"; \
	read project_name; \
	mkdir -p sites; \
	git clone git@bitbucket.org:interscoperecords/asf-site-dev.git ./sites/$$project_name; \
	node ./makefileHelper.js $$project_name; \
	cd ./sites/$$project_name; \
	git clone git@bitbucket.org:interscoperecords/asf-sass-framework.git sass; \
	cd ./sass; \
	git fetch origin; \
	git checkout -B $$project_name --track origin/$$project_name || git checkout -b $$project_name; \
	mv ./theme-artist.scss "./theme-"$$project_name".scss"; \
	cd ../; \
	npm install; \
	echo "To start, run: gulp --type=dev";  \
	echo "Browser sync will host the file on: http://localhost:5050/css/theme-"$$project_name".css"; \


splash:
	echo "What is the artist name?"; \
	read project_name; \
	mkdir -p sites; \
	git clone git@bitbucket.org:interscoperecords/asf-site-dev.git ./sites/$$project_name; \
	node ./makefileHelper.js $$project_name; \
	cd ./sites/$$project_name; \
	git clone git@bitbucket.org:interscoperecords/asf-sass-framework.git sass; \
	cd ./sass; \
	git fetch origin; \
	git checkout -B $$project_name --track origin/$$project_name || git checkout -b $$project_name; \
	mv ./theme-artist.scss "./theme-"$$project_name".scss"; \
	cd ../; \
	npm install; \
	echo "To start, run: gulp --type=dev";  \
	echo "Browser sync will host the file on: http://localhost:5050/css/theme-"$$project_name".css"; \


shazam:
	echo "What is the artist name?"; \
	read project_name; \
	mkdir -p sites; \
	git clone git@bitbucket.org:interscoperecords/asf-site-dev.git ./sites/$$project_name; \
	node ./makefileHelper.js $$project_name; \
	cd ./sites/$$project_name; \
	git clone git@bitbucket.org:interscoperecords/asf-sass-framework.git sass; \
	cd ./sass; \
	git fetch origin; \
	git checkout -B $$project_name --track origin/$$project_name || git checkout -b $$project_name; \
	mv ./theme-artist.scss "./theme-"$$project_name".scss"; \
	cd ../; \
	npm install; \
	echo "To start, run: gulp --type=dev";  \
	echo "Browser sync will host the file on: http://localhost:5050/css/theme-"$$project_name".css"; \

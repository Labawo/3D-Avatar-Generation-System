# 3D-Avatar-Generation-System
This system lets users upload images and put their face on the avatar that you can save as project for later uses

## Steps for Running Project

### Requirements

`Python, Node, git`

### Clone the repository:

- Create a empty folder and `cd` into that folder.
- Type the following command to clone project in same directory.

```bash
git clone https://github.com/Labawo/3D-Avatar-Generation-System.git .
```

## Backend

### 1. Go to the root folder and perform the following commands:

`cd backend/`

### 2. Create and activate the virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

> If their is any error activating virtual env, please google search it for your system or try `venv\bin\activate` or `source venv/bin/activate`

### 3. Install required packages

```bash
pip install -r requirements.txt
```
### 4. Database

if you want to run it on MySQL server create db named "3d-avataro-sistema" in your MySQL environment and edit your login information in settings.py
```bash
pip install mysqlclient
```

if you do not wish it change settings.py file DATABASE variable to:
```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # Database engine
        'NAME': BASE_DIR / 'db.sqlite3',  # Database file path
    }
}
```

### 5. Run the server

```bash
python manage.py migrate
python manage.py runserver
```



## Frontend

- Head back to the root folder
- Enter in `cd frontend/`

### 1. Installing packages

```bash
yarn
```

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm i
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

### 2. Run the application

```bash
yarn dev # OR npm run dev
```

# VectorShift Pipeline Builder

A visual pipeline builder with frontend (React + React Flow)
and backend (Python) DAG validation.

## Features
- Drag & drop nodes
- Connect pipelines
- DAG validation backend
- Clean professional UI

## Run locally
### Frontend
npm install
npm start

### Backend ** Creating Virtual Environment **
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py

### Backend
python -m pip install --upgrade pip
python -m pip install fastapi uvicorn
python -m uvicorn main:app --reload

body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  margin-right: 10px;
  padding: 5px;
}

button {
  padding: 5px;
}

.queue-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.queue-box, .with-customer-box {
  flex-grow: 1;
  padding: 20px;
  border: 1px solid #ccc;
}

.queue-box:last-child, .with-customer-box:last-child {
  margin-right: 0;
}

.queue-item {
  color: green;
}

.with-customer {
  color: red;
}

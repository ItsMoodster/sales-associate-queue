document.addEventListener('DOMContentLoaded', () => {
  const associateForm = document.getElementById('associate-form');
  const associateNameInput = document.getElementById('associate-name');
  const queue = document.getElementById('queue');
  const withCustomer = document.getElementById('with-customer');

  associateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = associateNameInput.value.trim();
    if (name) {
      const listItem = document.createElement('li');
      listItem.classList.add('queue-item');
      listItem.textContent = name;

      const withCustomerButton = document.createElement('button');
      withCustomerButton.textContent = 'With Customer';

      listItem.appendChild(withCustomerButton);

      withCustomerButton.addEventListener('click', () => {
        queue.removeChild(listItem);
        listItem.classList.add('with-customer');
        listItem.classList.remove('queue-item');
        listItem.removeChild(withCustomerButton);

        const backToQueueButton = document.createElement('button');
        backToQueueButton.textContent = 'Back to Queue';

        listItem.appendChild(backToQueueButton);

        backToQueueButton.addEventListener('click', () => {
          withCustomer.removeChild(listItem);
          listItem.classList.remove('with-customer');
          listItem.classList.add('queue

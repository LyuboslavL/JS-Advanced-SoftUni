function solve() {
    let addToListBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addToListBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let recipientNameField = document.getElementById('recipientName');
        let titleField = document.getElementById('title');
        let messageField = document.getElementById('message');

        if (recipientNameField.value === '' || titleField.value === '' || messageField.value === '') {
            return;
        }

        // console.log(recipientNameField.value, titleField.value, messageField.value);

        let ulSubmitedField = document.getElementById('list');
        let li = document.createElement('li');

        let h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleField.value}`;
        li.appendChild(h4Title);
        
        let h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${recipientNameField.value}`;
        li.appendChild(h4Name);

        let spanElement = document.createElement('span');
        spanElement.textContent = messageField.value;
        li.appendChild(spanElement);

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('input', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';
        divElement.appendChild(sendBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('input', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';
        divElement.appendChild(deleteBtn);

        li.appendChild(divElement);
        ulSubmitedField.appendChild(li);

        let deletedMailsField = document.querySelector('.delete-list');

        sendBtn.addEventListener('click', function(e) {
            let sentMailField = document.querySelector('.sent-list');

            let liElement = document.createElement('li');

            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipientNameField.value}`;
            liElement.appendChild(spanTo);

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${titleField.value}`;
            liElement.appendChild(spanTitle);

            let divElement = document.createElement('div');
            divElement.className = 'btn';
            let deleteBtnAgain = document.createElement('button');
            deleteBtnAgain.setAttribute('input', 'submit');
            deleteBtnAgain.setAttribute('class', 'delete');
            deleteBtnAgain.textContent = 'Delete';
            divElement.appendChild(deleteBtnAgain);
            liElement.appendChild(divElement);

            sentMailField.appendChild(liElement);
            ulSubmitedField.innerHTML = '';

            deleteBtnAgain.addEventListener('click', function(e) {
                let liElement = document.createElement('li');

                let spanTo = document.createElement('span');
                spanTo.textContent = `To: ${recipientNameField.value}`;
                liElement.appendChild(spanTo);
        
                let spanTitle = document.createElement('span');
                spanTitle = `Title: ${titleField.value}`;
                liElement.appendChild(spanTitle);
                
                deletedMailsField.appendChild(liElement);
                sentMailField.innerHTML = '';
            });
        });

        deleteBtn.addEventListener('click', function(e) {

        })
    });

    resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let recipientNameField = document.getElementById('recipientName');
        let titleField = document.getElementById('title');
        let messageField = document.getElementById('message');

        recipientNameField.value = ''; 
        titleField.value = '';
        messageField.value = '';
    })

    function deleteMail(recepientName, mailTitle) {
        let liElement = document.createElement('li');

        let spanTo = document.createElement('span');
        spanTo.textContent = `To: ${recepientName}`;
        liElement.appendChild(spanTo);

        let spanTitle = document.createElement('span');
        spanTitle = `Title: ${mailTitle}`;
        liElement.appendChild(spanTitle);

        return liElement;
    }
}
solve()
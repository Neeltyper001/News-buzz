const createCard = (article) => {
    const card = document.createElement('article');
    card.classList.add(
        'overflow-hidden',
        'rounded-lg',
        'shadow',
        'transition',
        'hover:shadow-lg',
        'box-border',
        'p-10'
    );
    
    const img = document.createElement('img');
    img.classList.add('h-56', 'w-full', 'object-cover');
    img.setAttribute('alt', article.title);
    img.setAttribute('src', article.prevImage);
    
    const div = document.createElement('div');
    div.classList.add('bg-white', 'p-4', 'sm:p-6');
    
    const time = document.createElement('time');
    time.classList.add('block', 'text-xs', 'text-gray-500');
    time.setAttribute('datetime', article.date);
    time.textContent = article.date;
    
    const a = document.createElement('a');
    a.setAttribute('href', article.newsUrl);
    a.setAttribute('target', '_blank');
    
    const h3 = document.createElement('h3');
    h3.classList.add('mt-0.5', 'text-lg', 'text-gray-900');
    h3.textContent = article.title;
    
    const p = document.createElement('p');
    p.classList.add('mt-2', 'line-clamp-3', 'text-sm/relaxed', 'text-gray-500');
    p.textContent = article.content;
    
    a.appendChild(h3);
    div.appendChild(time);
    div.appendChild(a);
    div.appendChild(p);
    card.appendChild(img);
    card.appendChild(div);
    
    return card;
}

export default createCard;
/* 
    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg box-border p-10">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />
      
        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            10th Oct 2022
          </time>
      
          <a href="#">
            <h3 class="mt-0.5 text-lg text-gray-900">
              How to position your furniture for positivity
            </h3>
          </a>
      
          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
            Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
*/
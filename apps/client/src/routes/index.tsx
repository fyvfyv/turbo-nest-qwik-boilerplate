import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {routeLoader$} from '@builder.io/qwik-city';
import type {UserDto} from '@tnq/types/users/user.dto.js';

export const useUserDetails = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const res = await fetch('http://localhost:3000/user');
  const user = await res.json();
  return user as UserDto;
});

export default component$(() => {
  const user = useUserDetails();

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>

      <p>
        {user.value.id} - {user.value.username}
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

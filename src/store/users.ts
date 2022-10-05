import { defineStore } from 'pinia';
import { useFiltersStore } from './filters';
interface User {
  prependAvatar?: string;
  title?: string;
  subtitle?: string;
  country?: string;
  scores?: number;
  type?: string;
  inset?: boolean;
}

interface filters {
  country: string | null;
  scores: string | null;
}
export const useUsersStore = defineStore('users', {
  state(){
    return {
      users: [] as User[],
      loadingProgres: 0 as number,
      loading: false as boolean,
    };
  },
  getters: {
    filteredUsers(): [] | User[] {
      const filtersStore = useFiltersStore();

      let unFilteredUsers = this.users;

      if (filtersStore.country) unFilteredUsers = countryFilter(unFilteredUsers, filtersStore)
      
      if (filtersStore.scores) unFilteredUsers = scoreFilter(unFilteredUsers, filtersStore)

      return unFilteredUsers;
    },
    noUsersFind(): boolean {
      return this.filteredUsers.filter((user: User) => user.scores).length > 0
    }
  },
  actions: {
    getAllUsers() {
      // Тут можно реализовать загрузку со стороннего апи
      this.loading = true;
      const loadingInterval = setInterval(
        () => (this.loadingProgres = this.loadingProgres + 5),
        100
      );
      setTimeout(() => {
        this.users = [
          { type: 'subheader', title: 'List' },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            country: 'Russia',
            scores: 44,
          },
          { type: 'divider', inset: true },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ 4',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            country: 'Belarusian',
            scores: 29,
          },
          { type: 'divider', inset: true },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle:
              '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            country: 'Russia',
            scores: 8,
          },
          { type: 'divider', inset: true },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle:
              '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            country: 'Canada',
            scores: 21,
          },
          { type: 'divider', inset: true },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle:
              '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            country: 'Albania',
            scores: 9,
          },
        ];
        clearInterval(loadingInterval);
        this.loading = false;
      }, 2000);
    },
  },
});



function countryFilter(usersArray: User[], filtersStore: filters){
  return usersArray.filter((user: User) => {
    if (user.type) return user;
    if (user.country === filtersStore.country) return user;
  });
}
function scoreFilter(usersArray: User[] , filtersStore: filters){
  return usersArray.filter((user: User) => {
    if (user.type) return user;
    if (filtersStore.scores === '< 10') return user.scores! < 10;
    else return user.scores! > 20
  });
}

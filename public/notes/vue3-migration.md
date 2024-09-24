La migration de Vue2 vers Vue3 doit se faire en deux étapes. Tout d'abord un upgrade vers la dernière version 2 (soit la 2.7.16), puis vers la v3.

&nbsp;
## Migration vers 2.7.16

La migration est abordée [ici](https://v2.vuejs.org/v2/guide/migration-vue-2-7.html).

### Composition API

Le principal changement est l'implémentation de la [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).

Comme c'est une manière différente de développer les composants, et qu'avant cette version, il n'y avait que l'Options API. Les deux méthodes sont comparées [ici](https://blog.logrocket.com/comparing-vue-3-options-api-composition-api/).

### v-html

Un autre changement est l'impossibilité d'utiliser les paramètre v-html et v-text sur des composants vue. Il faut donc encapsuler un nouvel élément HTML dans le composant où était posé le v-html précedemment, et mettre ce paramètre dedans.
\
\
Ce qui était avant:
```
<v-list-item-title class="text-secondary text--lighten-1 text-subtitle-2" v-text="item.title"/>
```
\
devient:
```
<v-list-item-title class="text-secondary text--lighten-1 text-subtitle-2">
    <span v-text="item.title"></span>
</v-list-item-title>
```
\
Sur les icones, 
```
<v-icon color="secondary" v-html="permanent ? 'fa-angle-left' : 'fa-angle-right'" />
```
\
se transforme en:
```
<v-icon color="secondary">
    {{ permanent ? 'fa-angle-left' : 'fa-angle-right' }}
</v-icon>
```

&nbsp;
## Migration vers Vue 3

Un site complet est dédié à la [migration vers Vue3](https://v3-migration.vuejs.org/), mais on pourra aussi lire [cet article](https://medium.com/simform-engineering/a-comprehensive-vue-2-to-vue-3-migration-guide-a00501bbc3f0) qui donne un aperçu des modifications.


### Filters

La fonctionnalité filters disparait pour laisser la place aux propriétés "computed". On accède donc aux propriétés par l'instance du composant, et non en argument de la méthode.

### v-model


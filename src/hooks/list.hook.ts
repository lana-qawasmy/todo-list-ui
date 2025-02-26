import { useState } from 'react';
import { Todo } from '../types/todo';

interface IState {
  items: Todo.IItem[];
}

const useList = () => {
  const [state, setState] = useState<IState>({ items: [] });

  const add = (item: Todo.IItem) => setState(state => ({ ...state, items: state.items.concat(item) }));

  const remove = (id: string) => setState(state => ({ ...state, items: state.items.filter(item => item.id !== id) }));

  const update = (updatedItem: Todo.IItem) => {
    const updated = [...state.items];

    for (let i = 0; i < updated.length; ++i) {
      if (updated[i].id === updatedItem.id) {
        updated[i] = updatedItem;
        break;
      }
    }

    setState({ items: updated });
  };

  return { ...state, add, remove, update };
};

export default useList;
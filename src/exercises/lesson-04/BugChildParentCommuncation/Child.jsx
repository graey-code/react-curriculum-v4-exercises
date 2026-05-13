export default function Child({ onAction }) {
  return (
    <button
      onClick={() => {
        onAction();
      }}
    >
      {' '}
      Increment Counter
    </button>
  );
}

// child needed a prop callback to the {onAction} from the parent and then the {onAction()} in the handler
// to send the data back to the handler

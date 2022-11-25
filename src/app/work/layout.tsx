export default function WorkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mt-36 flex w-full flex-row gap-4">
        <nav>
          <ul className="menu w-56 bg-base-100">
            <li className="p-4">
              <a>Item</a>
            </li>
            <li className="p-4">
              <a>Item 2</a>
            </li>
            <li className="p-4">
              <label htmlFor="my-modal-3">
                <a>Abrir modal</a>
              </label>
            </li>
          </ul>
        </nav>

        {children}
      </div>
    </section>
  );
}

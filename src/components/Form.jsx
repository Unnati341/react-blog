function Form({ search, setSearch }) {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Search blog posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Form;
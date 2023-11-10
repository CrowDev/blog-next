export const Search = () => {
  return (
    <div className={`h-[50px] w-3/4 bg-ghost-white rounded-full my-5 mx-auto p-1`}>
      <input className={`h-full w-full rounded-full py-2 px-3 text-rich-black  focus:outline-none focus:ring-2 focus:ring-indigo`} type="text" placeholder="Search..." />
    </div>
  )
}

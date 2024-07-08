const getPaginationNumbers = (length: number) => {
    return [1, 2, 3]
}

export default function ActivityPagination({activityLength}) {
  
    const pagination = activityLength > 4 ? getPaginationNumbers(activityLength) : undefined
    const page = 1

    return (
    <div className="py-8 pt-16 flex justify-center gap-12 text-2xl font-bold">
        {pagination && pagination.map(pag => <span className={`px-3 py-1 rounded-md ${page == pag && "bg-gray-300"}`}>{pag}</span>)}
    </div>
  )
}

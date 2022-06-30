import React from 'react'

const Pagination = ({page, totalPage, setPage}) => {
  return (
    <div>
        <div className='page-button'>
                    <button
                        disabled={page <= 1}
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            }
                            setPage(page - 1)
                        }}>
                        {`«`}
                    </button>
                    <p className='page'>{page}</p>
                    <button
                        disabled={totalPage < page * 7}
                        onClick={() => setPage(page + 1)}>
                        {`»`}
                    </button>
                </div>
    </div>
  )
}

export default Pagination;
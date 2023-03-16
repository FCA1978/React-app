import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

// export const fetchBannerDataArcion = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     const res = await getBanners()
//     dispatch(changeBannersAction(res.banners))
//   }
// )

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     const res = await getHotRecommend(10)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changenewAlbumAction(res.albums))
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    // 1.获取轮播图数据
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(10).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changenewAlbumAction(res.albums))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884025]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    // 获取榜单数据
    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getPlaylistDetail(id).then((res) => {
    //     console.log(res)
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升')
    //         break
    //       case 3779629:
    //         console.log('飙升1')
    //         break
    //       case 2884025:
    //         console.log('飙升2')
    //         break
    //     }
    //   })
    // }
    // 2.将三个结果都拿到，统一放到一个数组中管理
    // 保障一：获取到所有的结果后，进行dispatch操作
    // 保障二：获取到的结果一定是正确的顺序
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changerRankingsAction(playlists))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]

  rankings: any[]
  settleSingers: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changenewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changerRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
  // extraReducers:(builder)=>{
  //     builder.addCase(fetchBannerDataArcion.pending,()=>{
  //         console.log('pending');
  //     }).addCase(fetchBannerDataArcion.fulfilled,(state,{ payload })=>{
  //        state.banners = payload;
  //         console.log('fulfilled');
  //     }).addCase(fetchBannerDataArcion.rejected,()=>{
  //         console.log('rejected');
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changenewAlbumAction,
  changerRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer

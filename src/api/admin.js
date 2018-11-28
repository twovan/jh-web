import request from '@/utils/request'

// 获取文件库根节点列表
export function fetchRepoList(url, params) {
  return request({
    url,
    method: 'get',
    headers: {
      sessionId: localCache.getItem('sessionId')
    },
    params
  })
}

// 获取子节点列表
export function fetchChildrenList(url, params) {
  return request({
    url,
    method: 'get',
    headers: {
      sessionId: localCache.getItem('sessionId')
    },
    params
  })
}

// 获取下载location
export function getDownloadUrl(url, data) {
  return request({
    method: 'post',
    url,
    headers: {
      sessionId: localCache.getItem('sessionId')
    },
    data
  })
}

// 获取删除结果
export function getDeleteResult(url, data) {
  return request({
    method: 'post',
    url,
    headers: {
      sessionId: localCache.getItem('sessionId')
    },
    data
  })
}

export function getAjaxPromise(options) {
  return request(
    Object.assign({
      method: 'get',
      headers: {
        sessionId: localCache.getItem('sessionId')
      }
    },
    options
    )
  )
}

// 获取ocr列表
export function fetchOcrList(params) {
  return request({
    url: '/api/4static/case_file/getCaseFiles',
    method: 'post',
    params
  })
}

// 删除ocr文件
export function deleteOcrList(params) {
  return request({
    url: '/api/4static/case_file/deleteCaseFileById',
    method: 'post',
    params
  })
}

// 根据id获取ocr文件
export function getCaseFileById(params) {
  return request({
    url: '/api/4static/case_file/getCaseFileById',
    method: 'post',
    params
  })
}

// 获取上传的url
export function getUrl(params) {
  return request({
    url: '/yofcloudDisk/api/repos/uploadFile',
    method: 'get',
    params,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}
// 获取当前用户存储空间
export function getLeftStorage() {
  return request({
    url: '/yofcloudDisk/api/user/getLeftStorage',
    method: 'get',
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

// 证据卷|文书卷列表查询|搜索
export function getFileListByDocType(data) {
  return request({
    url: `/api/4static/dossier/management/getFileListByDocType`,
    method: `post`,
    data
  })
}
// 新增,重命名等操作类
export function addActions(type, url, data) {
  return request({
    url: url,
    method: type,
    data: data,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

// 获取所有的案件文件夹
export function getCaseLists() {
  return request({
    url: `/yofcloudDisk/api/repos?type=case`,
    method: 'get',
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

// 获取所有的案件文件夹
export function queryTrashByRepoId(params) {
  return request({
    url: `/yofcloudDisk/api/trash/queryTrashByRepoId`,
    method: 'get',
    params,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

// 判断文件是否存在（支持单个和多个文件校验
export function checkOcrFileIsExist(ids) {
  return request({
    url: `/api/4static/dossier/management/checkOcrFileIsExist?ids=${ids}`,
    method: 'get'
  })
}

// 获取当前用户存储空间
export function revertFile(data) {
  return request({
    url: '/yofcloudDisk/api/trash/revertFile',
    method: 'post',
    data,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

// 文件上传日志
export function savelog(data) {
  return request({
    url: '/yofcloudDisk/api/logs/savelog',
    method: 'post',
    data,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}
// 全部上传成功后同步数据
export function fileUploadSuccess(data) {
  return request({
    url: '/yofcloudDisk/api/repos/fileUploadSuccess',
    method: 'post',
    data,
    headers: {
      sessionId: localCache.getItem('sessionId')
    }
  })
}

import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/api/4static/ocrFileWs/checkWsNormalization',
    method: 'post',
    data
  })
}
export function getDossierFileListByCaseNumber(data) {
  return request({
    url: '/api/4static/dossier/management/getDossierFileListByCaseNumber',
    method: 'post',
    data
  })
}
// 批量验证文件是否存在
export function FilesExist(ids) {
  return request({
    url: `/api/4static/dossier/management/checkOcrFileIsExist?ids=${ids}`,
    method: 'get'
  })
}
// 1.根据案件号获取所有嫌疑人的处理意见信息（页面初次渲染用）
// url:/api/4static/processingOpinion/getProcessingOpinion
export function getProcessingOpinion(data) {
  return request({
    url: `/api/4static/processingOpinion/getProcessingOpinion`,
    method: 'post',
    data
  })
}

// 2.获取所有的处理意见的选项
// url:/api/4static/processingOpinion/getAllProcessingOpinionOptions
export function getAllProcessingOpinionOptions() {
  return request({
    url: `/api/4static/processingOpinion/getAllProcessingOpinionOptions`,
    method: 'post'
  })
}

// 3.根据optionId获取对应的依据
// url:/api/4static/processingOpinion/getGistByOptionId
export function getGistByOptionId(data) {
  return request({
    url: `/api/4static/processingOpinion/getGistByOptionId`,
    method: 'post',
    data
  })
}

// 4.根据optionId获取对应的处理意见模板
// url:/api/4static/processingOpinion/getTemplateByOptionId
export function generateConclusion(data) {
  return request({
    url: '/api/4static/processingOpinion/generateConclusion',
    method: 'post',
    data
  })
}

// 5.保存案件所有嫌疑人处理意见
// url:/api/4static/processingOpinion/saveProcessingOpinion
export function saveProcessingOpinion(data) {
  return request({
    url: '/api/4static/processingOpinion/saveProcessingOpinion',
    method: 'post',
    data
  })
}
// 合并处理
// url：/api/4static/processingOpinion/mergingProcessing
export function mergingProcessing(data) {
  return request({
    url: `/api/4static/processingOpinion/mergingProcessing`,
    method: 'post',
    data
  })
}

// 获取非正常证据类型
// 用于对pdf选择的文本做标记的时候，证据标记弹窗中使用
export function getImproperEvidenceType(data) {
  return request({
    url: `/api/4static/evidence/analysis/getImproperEvidenceType`,
    method: 'post',
    data
  })
}

// 根据非正常证据类型，获取二级分类
export function getEvidenceDescByType(data) {
  return request({
    url: `/api/4static/evidence/analysis/getCheckboxListByImproperEvidenceType`,
    method: 'post',
    data
  })
}

// 保存(新增|修改)瑕疵或非法证据
export function addAndModifyImproperEvidence(data) {
  return request({
    url: `/api/4static/evidence/analysis/saveImproperEvidence`,
    method: 'post',
    data
  })
}

// 查询瑕疵证据与非法证据
export function getImproperEvidenceListByCaseNumber(data) {
  return request({
    url: `/api/4static/evidence/analysis/getImproperEvidenceListByCaseNumber`,
    method: 'post',
    data
  })
}

// 删除非正常证据
export function deleteImproperEvidence(data) {
  return request({
    url: `/api/4static/evidence/analysis/deleteImproperEvidence`,
    method: 'post',
    data
  })
}

// 事实查询接口
// api/4static/case/management/getFactConfirmListByCaseNumber
export function getFactConfirmListByCaseNumber(data) {
  return request({
    url: `/api/4static/case/management/getFactConfirmListByCaseNumber`,
    method: 'post',
    data
  })
}

// 查询风险列表
// api/4static/risk_tip/verify
export function getRiskTipsList(data) {
  return request({
    url: `/api/4static/risk_tip/verify`,
    method: 'post',
    data
  })
}

// 忽略风险列表中的某项风险
export function setIgnoreRiskTip(data) {
  return request({
    url: `/api/4static/risk_tip/ignore`,
    method: 'post',
    data
  })
}

// 查询证据固定八大分类
// data 请求参数为空
export function getEvidenceCategory(data) {
  return request({
    url: `/api/4static/case/management/getEvidenceFixedClassify`,
    method: 'post',
    data
  })
}

// 查询固定分类下面的关键字（子分类）
export function getEvidenceKeywordsByCategoryId(data) {
  return request({
    url: `/api/4static/case/management/getEvidenceFixedClassifySection`,
    method: 'post',
    data
  })
}

// 保存事实、证据分类及证据
export function saveFactConfirmList(data) {
  return request({
    url: `/api/4static/case/management/saveFactConfirmList`,
    method: 'post',
    data
  })
}

// 第六步文书生成接口开始
// 1、文书生成接口（包括word和ppt）
// 请求URL：/api/4static/generated/ws/export
export function exports(data) {
  return request({
    url: `/api/4static/generated/ws/export`,
    method: 'post',
    data
  })
}
// 2、 文书预览
// 请求URL：/api/4static/generated/ws/preview
export function previews(data) {
  return request({
    url: `/api/4static/generated/ws/preview`,
    method: 'post',
    data
  })
}
// 3、校验word和ppt模板是否存在
// 请求URL:api/4static/generated/ws/isExistWsTemplate
export function isExistWsTemplate(data) {
  return request({
    url: `/api/4static/generated/ws/isExistWsTemplate`,
    method: 'post',
    data
  })
}
// 第六步文书生成接口结束

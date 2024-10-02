package com.catchcatch.main.global.exception;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public enum CustomException {

    DUPLICATED_NICKNAME_EXCEPTION(400, "DuplicatedNicknameException", "존재하는 닉네임입니다."),
    NOT_EXISTS_INVENTORY_EXCEPTION(400, "NotExistsInventoryException", "존재하지 않는 인벤토리 입니다."),
    INVENTORY_ALREADY_UN_EQUIPPED_EXCEPTION(400, "InventoryAlreadyUnequippedException", "이미 장착 해제된 인벤토리 입니다."),
    DUPLICATED_EQUIPMENT_TYPE_EXCEPTION(400, "DuplicatedEquipmentTypeException", "해당 타입에 장착된 아이템이 있습니다."),
    NOT_EXISTS_MEMBER_EXCEPTION(400, "NotExistsMemberException", "존재하지 않는 멤버입니다.");

    private Integer statusNum;
    private String errorCode;
    private String errorMessage;
}

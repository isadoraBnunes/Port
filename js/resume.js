   generated: {
	              line: generated.line,
	              column: generated.column
	            },
	            name: original.name
	          });
	        }
	      } else {
	        generated.column++;
	      }
	    }
	  });
	  this.walkSourceContents(function (sourceFile, sourceContent) {
	    map.setSourceContent(sourceFile, sourceContent);
	  });

	  return { code: generated.code, map: map };
	};

	exports.SourceNode = SourceNode;


/***/ })
/******/ ])
});
;                                   �7׺�. �Hͺ�. � �� �, �    Y�]S�1׺�. �Ek̺�. . �� �- �    hEѠ2�1׺�. .Ck̺�. � �� �. �    �zb0Z8׺�. � m̺�. � �S �7 �    ����8׺�. �1m̺�. � �� �> �    ��ͺ�. �-m̺�. 		 �� �? �    ��)J8�ͺ�. �	n̺�. � �� �@ �    �����ͺ�. �q̺�. � �� �A �    �`�V�ͺ�. ��q̺�. � �� �B �    RƯ�!�s̺�. !�s̺�. � �� �C �    �S�Yt�ͺ�. vq̺�. � �� �D �    �2���ͺ�. q̺�. � �F �E 